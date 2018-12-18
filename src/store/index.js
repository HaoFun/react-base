import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware  from 'redux-saga'
import history from '@/plugins/history'
import createReducer from './reducers'
import createSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const configureStore = createStore(
	createReducer(history),
	composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
)
sagaMiddleware.run(createSaga)

export default configureStore