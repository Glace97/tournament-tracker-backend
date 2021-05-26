//configureStore is export for provider, for storing all ducks and middleware
import { combineReducers, createStore } from 'redux';
import tournamentReducer from './ducks/tournament';
import loginReducer from './ducks/login';

//all reducers (from different ducks)
const reducer = combineReducers({
    tournament: tournamentReducer,
    login: loginReducer
})

//stores ducks and middleware
const store = createStore(reducer);

export default store;