import { combineReducers } from 'redux'
//! each reducer
import logReducer from './logReducer'
import techReducer from './techReducer'

//! to create our rootReducer
export default combineReducers({
  log: logReducer,
  tech: techReducer
})