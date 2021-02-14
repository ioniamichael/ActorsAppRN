import {FETCH_ACTORS,IS_LIST_LAYOUT} from "../types";

const initialState = {
    allActors: [],
    isListLayout: false
}

export const actorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTORS:
            return {
                ...state,
                allActors: action.payload
            };
        case IS_LIST_LAYOUT:
            return{
                ...state,
                isListLayout: action.payload
            }
    }
    return state;
}
