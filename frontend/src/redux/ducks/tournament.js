//actionname, ID for modifying state stored in redux
const TOURNAMENT = 'tournament';

//function returns action type
export const tournament = (newValue) => ({
    type: TOURNAMENT,
    payLoad: newValue
});


//initial state
const initialState = {
    selectedTournament: ""  //en counter tillsvidare
};

//reducer, implemented action modifying state
//if state is undefined, set to initial
export default (state = initialState, action) => {
    switch(action.type) {
        case TOURNAMENT: 
            //add new state
            return {...state, selectedTournament: action.payLoad };      //tillfället en incrementing counter
        default:
            return state;
    }
};
