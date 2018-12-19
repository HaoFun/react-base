import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import MainLayout from '@/components/Layouts/MainLayout'
import BaseLayout from '@/components/Layouts/BaseLayout'
import { Router } from 'react-router-dom'
import history from '@/plugins/history'

class RootRouter extends PureComponent {
	render() {
		const {isAuth} = this.props
		const Layout = isAuth ? MainLayout: BaseLayout
		return (
			<Router history={history}>
				<Layout />
			</Router>
		)
	}
}

const mapStateToProps = state => {
	return {
		isAuth: state.getIn(['auth', 'status'])
	}
}

export default connect(mapStateToProps)(RootRouter)

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
