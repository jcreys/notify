import axios from 'axios'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_LISTINGS = 'SET_LISTINGS'

/**
 * ACTION CREATORS
 */
const setListings = data => ({type: SET_LISTINGS, data})

/**
 * THUNK CREATORS
 */
export const subscribeToFilter = (payload) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    return await axios.post('/api/subscriptions', payload, {
      headers: {
        authorization: token
      }
    })
  }
}

export const getListings = (payload) => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/api/listings', {
      params: payload,
      headers: {
        authorization: token
      }
    })
    console.log('res', res)
    return dispatch(setListings(res.data))
  }
}

/**
 * REDUCER
 */
export default function(state = { listings: [] }, action) {
  switch (action.type) {
    case SET_LISTINGS:
      return { listings: action.data }
    default:
      return state
  }
}
