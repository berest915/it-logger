import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR
} from './types'
import axios from 'axios'


//  get techs from server
export const getTechs = () => async(dispatch) => {
  try {

    setLoading()
  
    console.log('getTecj=h setloading')
    const res = await fetch('/techs')
    const data = await res.json()
   
    dispatch({
      type: GET_TECHS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    })
  }
}
//  add tech from server
export const addTech = (tech) => async(dispatch) => {
  try {
    setLoading()
    const config = {
      headers:{
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post('/techs', tech, config)
   
    dispatch({
      type: ADD_TECH,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    })
  }
}
//  delete tech from server
export const deleteTech = (id) => async(dispatch) => {
  try {
    setLoading()
   
    await axios.delete(`/techs/${id}`)
  
    dispatch({
      type: DELETE_TECH,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText
    })
  }
}

//  set loading to true
const setLoading = () => (dispatch) => {
  dispatch({
    type: SET_LOADING
  })
}
