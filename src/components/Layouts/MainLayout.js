import React, { PureComponent } from 'react'
import { ConnectedRouter } from 'connected-react-router/immutable'
import { Switch, Route } from 'react-router-dom'
import { authRoute } from '@/router/router'
import { connect } from 'react-redux'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import { setWindowSizeAction } from '@/store/styled/action'
import history from '@/plugins/history'

class MainLayout extends PureComponent {
	render() {
		const { user, height } = this.props
		let routers = authRoute.reduce((routes, current) => {
			return user.map(item => item.component).includes(current.name) ? [
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
					<ConnectedRouter history={history}>
						<Switch>
							{routers}
						</Switch>
					</ConnectedRouter>
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
}

const mapStateToProps = state => {
	let user = state.getIn(['auth', 'user'])
	user = user && user.permissions ? user.permissions: []
	return {
		user: user,
		height: state.getIn(['styled', 'height']),
	}
}

const mapDispatchToProps = dispatch => ({
	screenResize() {
		const {innerWidth, innerHeight} = window
		dispatch(setWindowSizeAction(innerWidth, innerHeight))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)