import React from 'react'
import { NavLink } from 'react-router-dom'
import config from '@/utils/config'

const NavigationHeader = () => {
	return (
		<li className="nav-header">
			<div className="profile-element">
				<NavLink to={config.rootIndex}>
					<h3>{config.profileElement}</h3>
				</NavLink>
			</div>
			<div className="logo-element">
				{config.logoElement}
			</div>
		</li>
	)
}

export default NavigationHeader