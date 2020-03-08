import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  UPDATE_LOG,
  SET_CURRENT,
  SEARCH_LOGS
} from './types'
import axios from 'axios'

//! get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading()
    const res = await fetch('/logs')
    const data = await res.json()

    dispatch({
      type: GET_LOGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}
//! add log to server
export const addLog = (log) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    setLoading()
    const res = await axios.post('/logs', log, config)
    dispatch({
      type: ADD_LOG,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}
//! delete log from server
export const deleteLog = (id) => async (dispatch) => {
  try {
    axios.delete(`/logs/${id}`)
    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}
//! set current
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}
//! update log from server
export const updateLog = (log) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.put(`/logs/${log.id}`, log, config)
    dispatch({
      type: UPDATE_LOG,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}
//! search logs
export const searchLogs = (text) => async (dispatch) => {
  try {
    setLoading()
    const res = await fetch(`/logs?q=${text}`)
    const data = await res.json()
    dispatch({
      type: SEARCH_LOGS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.response.statusText
    })
  }
}

//  set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}
