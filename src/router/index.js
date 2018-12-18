import React, { PureComponent } from 'react'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Switch, Redirect, Route } from 'react-router-dom'
import { guestRoute, authRoute } from './router'
import { connect } from 'react-redux'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { setWindowSizeAction } from '@/store/styled/action'

class RootRouter extends PureComponent {
	routerList(isAuth, permission, height) {
		if (isAuth) {
			let permissions = []
			if (permission) {
				permissions = permission.map(item => item.component)
			}
			return this.iSAuth(permissions, height)
		}
		return this.isGuest()
	}

	isGuest() {
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
				<Switch>
					{routers}
					<Redirect exact to='/login' />
				</Switch>
			</div>
		)
	}

	iSAuth(permissions, height) {
		let routers = authRoute.reduce((routes, current) => {
			return permissions.includes(current.name) ? [
				...routes, (
					<Route
						key={current.name}
						exact={current.exact}
						path={current.path}
						component={current.component}
					/>
				)]: routes}, [])
		return (
			<div id="wrapper">
				<Navigation
					height={height}
				/>
				<div id="page-wrapper" className='gray-bg'>
					<Header />
					<Switch>
						{routers}
					</Switch>
					<Footer />
				</div>
			</div>
		)
	}

	componentDidMount() {
		window.addEventListener("resize", this.props.screenResize)
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.props.screenResize)
	}

	render() {
		const {isAuth, user, history, height} = this.props
		return (
			<ConnectedRouter history={history}>
				{this.routerList(isAuth, user, height)}
			</ConnectedRouter>
		)
	}
}

const mapStateToProps = state => {
	let user = state.getIn(['auth', 'user'])
	user = user && user.permissions
	return {
		user: user,
		isAuth: state.getIn(['auth', 'status']),
		height: state.getIn(['styled', 'height']),
	}
}

const mapDispatchToProps = dispatch => ({
	screenResize() {
		const {innerWidth, innerHeight} = window
		dispatch(setWindowSizeAction(innerWidth, innerHeight))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(RootRouter)

export const menuContent = (intl, user) => {
	let menu = []
	if (user && user.permissions) {
		menu = (user.permissions).sort(
			(permission, next_permission) =>
				permission.parent_id - next_permission.parent_id
		).reduce((menu, permission) => {
			if (permission.parent_id && menu[permission.parent_id].content) {
				(menu[permission.parent_id].content).push({
					id: permission.id,
					icon: permission.icon,
					label: intl.formatMessage({id: permission.label}),
					to: permission.path
				})
			} else {
				menu[permission.id] = {
					id: permission.id,
					icon: permission.icon,
					label: intl.formatMessage({id: permission.label}),
					content: []
				}
			}
			return menu
		}, []).filter(menu => menu)
	}
	return menu
}
