import {DETALLE} from "../actions/actionName"

const initialState = {
    detalle: [],
}

export default function detRed (state = initialState, action) {
    switch (action.type) {
        case DETALLE:
            return {
                ...state,
                detalle: action.payload
            }
        default:
            return state;
    }
}