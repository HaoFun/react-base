import * as constants from './constant'

export const logoutAction = () => {
  return {
	  type: constants.LOGOUT
  }
}

export const fetchUserTokenAction = (access_token) => {
  return {
	  type: constants.FETCH_USER_TOKEN,
	  access_token
  }
}

export const loginSagaAction = (account, password, callback) => ({
  type: constants.LOGIN,
  account,
  password,
  callback
})

export const fetchUserSagaAction = callback => {
  return {
	  type: constants.FETCH_USER,
	  callback
  }
}

export const fetchUserSucceededAction = user => {
	return {
		type: constants.FETCH_USER_SUCCEEDED,
		user
	}
}

export const fetchUserFailureAction = error => {
  return {
	  type: constants.FETCH_USER_FAILURE,
	  error
  }
}