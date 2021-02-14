import {FETCH_ACTORS} from "../types";

const initialState = {
    allActors: []
}

export const actorReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTORS:
            return {
                ...state,
                allActors: action.payload
            }
    }
    return state;
}
