import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeLocaleAction } from '@/store/locale/action'
import { toggleMiniNavbarAction } from '@/store/styled/action'
import { logoutAction } from '@/store/auth/action'
import config from '@/utils/config'
import { injectIntl } from 'react-intl'
import UI from './UI'

class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.user !== this.props.user || nextProps.locale !== this.props.locale
	}

	render() {
		const {intl, user, logout, changeLocale, locale, toggleMiniNavbar} = this.props
		const dropDownMenuUser = [{
			key: "logout",
			hasSpan: true,
			hasICON: true,
			iconClassName: "fa fa-sign-out",
			value: intl.formatMessage({id: 'logout'})
		}]
		const dropDownLocale = Object.keys(config.locales).map(locale => {
			return {
				key: locale,
				value: locale,
				showValue: config.locales[locale]
			}
		})
		return (
			<UI
			  locale={config.locales[locale]}
			  dropDownLocale={dropDownLocale}
			  changeLocale={changeLocale}
			  toggleMiniNavbar={toggleMiniNavbar}
			  dropDownMenuUser={dropDownMenuUser}
			  logout={logout}
			  username={user && user.name}
			/>
		)
	}
}

const mapStateToProps = state => ({
	locale: state.getIn(['locale', 'locale']),
	user: state.getIn(['auth', 'user'])
})

const mapDispatchToProps = dispatch => ({
	changeLocale(e) {
		dispatch(changeLocaleAction(e.target.value))
	},
	logout() {
		dispatch(logoutAction())
	},
	toggleMiniNavbar() {
		dispatch(toggleMiniNavbarAction())
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Header))