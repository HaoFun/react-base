import React from 'react'
import PropTypes from 'prop-types'
import UI from './UI'

const ToggleLocale = props => {
	const {dropDownValue, dropDownLocale, changeLocaleHandler, toggleHandler} = props
	return (
		<UI
			dropDownValue={dropDownValue}
			dropDownLocale={dropDownLocale}
			changeLocaleHandler={changeLocaleHandler}
			toggleHandler={toggleHandler}
		/>
	)
}

ToggleLocale.propTypes = {
	dropDownValue: PropTypes.string.isRequired,
	dropDownLocale: PropTypes.array.isRequired,
	changeLocaleHandler: PropTypes.func.isRequired,
	toggleHandler: PropTypes.func.isRequired
}

export default ToggleLocale