import { combineReducers } from 'redux'
import detRed from './detRed'
import conRed from './conRed'
import turRed from './turRed'

const rootReducer = combineReducers({
    detRed,
    conRed,
    turRed
})

export default rootReducer