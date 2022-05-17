import axios from 'axios'
import history from '../history'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_DATA = 'SET_DATA'

/**
 * ACTION CREATORS
 */
const setData = data => ({type: SET_DATA, data})

/**
 * THUNK CREATORS
 */
export const subscribeToFilter = (payload) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.post('/twilio', payload, {
      headers: {
        authorization: token
      }
    })
    console.log('res', res)
    return dispatch(setData(res.data))
  }
}

/**
 * REDUCER
 */
export default function(state = { data: null }, action) {
  switch (action.type) {
    case SET_DATA:
      return { data: action.data }
    default:
      return state
  }
}
