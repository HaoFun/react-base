import React from 'react'
import Dropdown from '@components/Dropdown'

const UI = ({ username, logout, dropDownMenuUser}) => {
	return (
		<ul className="nav navbar-top-links navbar-right">
			<Dropdown
				dropdownClassName="dropdown-menu-user"
				dropdownToggleValue={username}
				itemOnClick={logout}
				dropdownItemList={dropDownMenuUser}
			/>
		</ul>
	)
}

export default UI