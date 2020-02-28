import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECHS,
  TECH_ERROR,
  SET_LOADING,
  TECHS_ERROR
} from './types'

//  get techs from server
export const getTechs = () => async(dispatch) => {
  try {
    debugger
    setLoading()
    debugger
    const res = await fetch('/techs')
    const data = await res.json()

    dispatch({
      type: GET_TECHS,
      payload: data
    })
    debugger
  } catch (err) {
    console.log(err)
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.data
    })
  }
}

//  set loading to true
const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING
  })
}
