import * as constants from './constant'
import { fromJS } from 'immutable'
import Cookies from 'js-cookie'

const token = Cookies.get('token')
const defaultState = fromJS({
  status: token ? true: false,
  token: token,
  user: {},
  error: null
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.LOGOUT:
		  Cookies.remove('token')
		  return state.merge({
			  status: false,
			  error: null,
			  token: null,
			  user: {}
		  })
	  case constants.FETCH_USER_TOKEN:
		  Cookies.set('token', action.access_token, {expires: action.expires})
		  return state.merge({
		  	token: action.access_token,
		  })
	  case constants.FETCH_USER_SUCCEEDED:
	    return state.merge({
		    status: true,
		    error: null,
		    user: action.user
	    })
    case constants.FETCH_USER_FAILURE:
	    Cookies.remove('token')
	    return state.merge({
		    token: null,
		    error: action.error,
		    user: {}
	    })
    default:
      return state
  }
}