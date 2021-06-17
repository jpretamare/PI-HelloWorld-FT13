import {TURISM, TURISMALL} from "../actions/actionName"

const initialState = {
    turis: [],
}

export default function turRed (state = initialState, action) {
    switch (action.type) {
        case TURISM:
            return {
                ...state,
                turis: action.payload
            }
        case TURISMALL:
            return {
                ...state,
                turis: action.payload
            }
        default:
            return state;
    }
}