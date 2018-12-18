import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import UI from './UI'

function setItemValue(item) {
	switch(true) {
		case item.hasICON && item.hasSpan:
			return (
				<Fragment>
					<i className={item.iconClassName}></i>
					<span className={item.spanClassName && item.spanClassName}>{hasShowValue(item)}</span>
				</Fragment>
			)
		case item.hasSpan:
			return <span className={item.spanClassName && item.spanClassName}> {hasShowValue(item)}</span>
		case item.hasICON:
			return <i className={item.hasICON}></i>
		default:
			return hasShowValue(item)
	}
}

function hasShowValue(item) {
	return item.showValue ?
		item.showValue:
		item.value
}

const Dropdown = props => {
	const {
		dropdownClassName,
		dropdownToggleClassName,
		dropdownItemList,
		dropdownToggleValue,
		itemOnClick,
		dropdownMenuRight
	} = props

	return (
		<UI
			dropdownClassName={dropdownClassName ? dropdownClassName: 'minimalize-styl-2'}
			dropdownToggleClassName={dropdownToggleClassName ? dropdownToggleClassName: 'btn btn-primary'}
			dropdownToggleValue={dropdownToggleValue ? dropdownToggleValue: 'null'}
			dropdownMenuRight={dropdownMenuRight}
			dropdownItemList={dropdownItemList}
			itemOnClick={itemOnClick}
			setItemValue={setItemValue}
		/>
	)
}

Dropdown.propTypes = {
	dropdownClassName: PropTypes.string,
	dropdownToggleClassName: PropTypes.string,
	dropdownItemList: PropTypes.array.isRequired,
	dropdownToggleValue: PropTypes.string,
	itemOnClick: PropTypes.func.isRequired,
	dropdownMenuRight: PropTypes.bool
}

export default Dropdown