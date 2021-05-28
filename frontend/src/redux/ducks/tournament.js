//actionname, ID for modifying state stored in redux
const TOURNAMENT = 'tournament';

//function returns action type
export const tournament = (newValue) => ({
    type: TOURNAMENT,
    payLoad: newValue
});


//initial state: borde vara ett tournament obj.
const initialState = {
    selectedTournament: ""  
};

//reducer, implemented action modifying state
export default (state = initialState, action) => {
    switch(action.type) {
        case TOURNAMENT: 
            return {...state, selectedTournament: action.payLoad };      
        default:
            return state;
    }
};
