import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  SEARCH_LOGS,
} from '../actions/types'

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    //  it diff with contact-keeper filtering, because it used query (diff endpoint) to narrow the result
    case SEARCH_LOGS:
      return{
        ...state,
        logs: action.payload
      }
    case UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map((log) =>
          log.id === action.payload.id ? action.payload : log
        ),
        current: null
      }
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      }
    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
        loading: false
      }
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      }
    case GET_LOGS:
      return {
        ...state,
        logs: action.payload,
        loading: false
      }
    case LOGS_ERROR:
      console.log(action.payload)
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state
  }
}
