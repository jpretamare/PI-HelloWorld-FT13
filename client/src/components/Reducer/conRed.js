import {INGRESO, PAG, BUSCADO, ALL, CONT, ASCPOB, DESCPOB, ASCABC, DESCABC} from "../actions/actionName"

const initialState = {
    countries: [],
}

export default function conRed (state = initialState, action) {
    switch (action.type) {
        case INGRESO:
            return {
                ...state,
                countries: action.payload
            }
        case PAG:
            return {
                ...state,
                countries: action.payload
            }
        case BUSCADO:
            return {
                ...state,
                countries: action.payload
            }
        case CONT:
            return{
                ...state,
                countries: action.payload
            }
        case ALL:
            return {
                ...state,
                countries: action.payload
            }
        case ASCPOB:
            return {
                ...state,
                countries: action.payload
            }
        case DESCPOB:
            return {
                ...state,
                countries: action.payload
            }
        case ASCABC:
            return {
                ...state,
                countries: action.payload
            }
        case DESCABC:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state;
    }
}