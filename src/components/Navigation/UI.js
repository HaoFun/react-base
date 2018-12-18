import React from 'react'
import ScrollBar from '@components/ScrollBar'
import { Nav } from 'reactstrap'
import NavigationHeader from '@/components/NavigationHeader'
import MetisMenu from 'haofun-react-metismenu/lib/index'
import RouterLink from 'react-metismenu-router-link'

const UI = ({height, router, intl, user, renderItem, menuContent}) => {
	return (
		<Nav className="navbar-default navbar-static-side">
			<ScrollBar>
				<MetisMenu
					menuHeader={NavigationHeader}
					menuHeight={height}
					renderItem={renderItem}
					content={menuContent}
					LinkComponent={RouterLink}
					activeLinkTo={router}
				/>
			</ScrollBar>
		</Nav>
	)
}

export default UI