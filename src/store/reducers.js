import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router'
import localeReducer from './locale/reducer'
import styledReducer from './styled/reducer'
import authReducer from './auth/reducer'

export default history => combineReducers({
	router: connectRouter(history),
  locale: localeReducer,
	styled: styledReducer,
  auth: authReducer
})

