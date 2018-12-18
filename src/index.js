import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { fetchUserSagaAction } from '@/store/auth/action'
import I18nProvider from '@/plugins/I18nProvider'
import IntlProvider from '@/plugins/IntlProvider'
import * as serviceWorker from './serviceWorker'
import { ToastContainer } from "react-toastify"
import history from '@/plugins/history'
import { Provider } from 'react-redux'
import RootRouter from './router'
import store from './store'
import './plugins'
import './themes'

if (!!store.getState().getIn(['auth', 'token'])) {
  store.dispatch(fetchUserSagaAction(() => {
  	history.push('/')
  }))
}

ReactDOM.render(
	<Provider store={store}>
		<I18nProvider>
			<IntlProvider>
				<Fragment>
					<ToastContainer
						position="bottom-right"
						autoClose={5000}
						newestOnTop={true}
						closeOnClick
						draggable
						pauseOnHover/>
					<RootRouter history={history}/>
				</Fragment>
			</IntlProvider>
		</I18nProvider>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()