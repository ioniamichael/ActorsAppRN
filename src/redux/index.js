import {createStore, combineReducers, applyMiddleware} from 'redux'
import {actorReducer} from "./reducers/actorReducer";
import thunk from 'redux-thunk'
import apiService from "../services/apiService";

const rootReducer = combineReducers({
    actor: actorReducer,
})

export default createStore(rootReducer, applyMiddleware(thunk))
