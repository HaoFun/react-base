import React from 'react'
import { connect } from 'react-redux'
import { menuContent } from "@/router"
import { injectIntl } from 'react-intl'
import UI from './UI'

// setting className
function renderItem(item, className = "nav-label") {
	return (<span className={className}>{item}</span>)
}

const Navigation = ({height, router, intl, user}) => {
	return (
		<UI
			height={height}
			router={router.pathname}
			intl={intl}
			user={user}
			renderItem={renderItem}
			menuContent={menuContent(intl, user)}
		/>
	)}

const mapStateToProps = state => {
	return {
		user: state.getIn(['auth', 'user']),
		router: state.getIn(['router', 'location'])
	}
}

export default connect(mapStateToProps)(injectIntl(Navigation))