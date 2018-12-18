import React from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const UI = ({
    dropdownClassName,
    dropdownToggleClassName,
    dropdownToggleValue,
    dropdownMenuRight,
    dropdownItemList,
    itemOnClick,
    setItemValue
  }) => {
	return (
		<UncontrolledDropdown className={dropdownClassName}>
			<DropdownToggle className={dropdownToggleClassName}>
				{dropdownToggleValue}
			</DropdownToggle>
			<DropdownMenu right={dropdownMenuRight}>
				{
					dropdownItemList.map(item => (
						<DropdownItem
							onClick={itemOnClick}
							value={item.value}
							key={item.key}>
							{setItemValue(item)}
						</DropdownItem>))
				}
			</DropdownMenu>
		</UncontrolledDropdown>
	)
}

export default UI