import React from 'react'
import PropTypes from 'prop-types'
import UI from './UI'

const TopNavbar = props => {
	const {
		logout,
		dropDownMenuUser,
		username,
	} = props

	return (
		<UI
			username={username ? username: 'null'}
			logout={logout}
			dropDownMenuUser={dropDownMenuUser}
		/>
	)
}

TopNavbar.propTypes = {
	logout: PropTypes.func.isRequired,
	username: PropTypes.string,
	dropDownMenuUser: PropTypes.array.isRequired
}

export default TopNavbar
