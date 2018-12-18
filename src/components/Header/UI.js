import React from 'react'
import { Nav } from 'reactstrap'
import ToggleLocale from '@components/Locale'
import TopNavbar from '@/components/TopNavbar'

const UI = ({locale, dropDownLocale, changeLocale, toggleMiniNavbar, logout, dropDownMenuUser, username}) => {
	return (
		<div className="row border-bottom">
			<Nav className="navbar navbar-static-top white-bg margin-bottom-0" role="navigation">
				<ToggleLocale
					dropDownValue={locale}
					dropDownLocale={dropDownLocale}
					changeLocaleHandler={changeLocale}
					toggleHandler={toggleMiniNavbar}
				/>
				<TopNavbar
					logout={logout}
					dropDownMenuUser={dropDownMenuUser}
					username={username}
				/>
			</Nav>
		</div>
	)
}

export default UI