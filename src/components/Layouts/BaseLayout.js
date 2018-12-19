import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Switch, Redirect, Route } from 'react-router-dom'
import { guestRoute } from '@/router/router'
import history from '@/plugins/history'

class BaseLayout extends Component {
	render() {
		let routers = guestRoute.map(route => (
			<Route
				key={route.name}
				exact={route.exact}
				path={route.path}
				component={route.component}
			/>
		))
		return (
			<div className="loginColumns animated fadeInDown">
				<ConnectedRouter history={history}>
					<Switch>
						{routers}
						<Redirect exact to='/login' />
					</Switch>
				</ConnectedRouter>
			</div>
		)
	}
}

export default BaseLayout