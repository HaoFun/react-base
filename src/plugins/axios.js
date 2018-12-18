import axios from 'axios'
import store from '@/store'
import { logoutAction } from '@/store/auth/action'

// Request interceptor
axios.interceptors.request.use(request => {
  const storeData = store.getState()
  const token = storeData.getIn(['auth', 'token'])
  token && (request.headers.common['Authorization'] = `Bearer ${token}`)
  const locale = storeData.getIn(['locale', 'locale'])
  locale && (request.headers.common['Accept-Language'] = locale)
  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
	const {status} = error.response
	if (status === 401) {
		store.dispatch(logoutAction())
	}
	return Promise.reject(error)
})

export default axios