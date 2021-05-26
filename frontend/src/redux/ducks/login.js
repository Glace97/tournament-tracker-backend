//easier containing in obj when for several types
export const actionTypes = {
    EMAIL: 'email',
    PASSWORD: 'password',
    VALIDEMAIL: 'validemail',
    VALIDPASSWORD: 'validpassword'
}


//return   
export const actionCreator = {
    email: (email) => ({
        type: actionTypes.EMAIL,
        email: email
    }),
    password: (password) => ({
        type: actionTypes.PASSWORD,
        password: password
    }),
    validemail: (value) => ({ 
        type: actionTypes.VALIDEMAIL,
        value: value 
    }),
    validpassword: (value) => ({ 
        type: actionTypes.VALIDPASSWORD, 
        value: value
    })
}

//update uservalue on change
const initialState = {
    email: "",
    password: "",
    validEmail: true,
    validPassword: true
};


export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EMAIL:
            return { ...state, email: action.email };
        case actionTypes.PASSWORD:
            return { ...state, password: action.password };

        //set opposite boolean
        case actionTypes.VALIDEMAIL:
            return { ...state, validEmail:action.validEmail };
        case actionTypes.VALIDPASSWORD:
            return { ...state, email: action.validPassword };
        default:
            return state;
    }
};