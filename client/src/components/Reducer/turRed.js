import {TURISM, TURISMALL, LIST} from "../actions/actionName"

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
        case LIST:
            return {
                ...state,
                turis: state
            }
        default:
            return state;
    }
}