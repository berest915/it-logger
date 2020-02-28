import { combineReducers } from 'redux'
//! each reducer
import logReducer from './logReducer'

//! to create our rootReducer
export default combineReducers({
  log: logReducer
})