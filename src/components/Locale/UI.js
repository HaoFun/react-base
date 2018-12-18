import React from 'react'
import { Header } from './styled'
import { Button } from 'reactstrap'
import Dropdown from '@/components/Dropdown'

const UI = ({toggleHandler, dropDownValue, changeLocaleHandler, dropDownLocale}) => {
	return (
		<Header>
			<Button
				className="minimalize-styl-2 btn btn-primary"
				onClick={toggleHandler}
			>
				<i className="fa fa-bars"></i>
			</Button>
			<Dropdown
				dropdownToggleValue={dropDownValue}
				itemOnClick={changeLocaleHandler}
				dropdownItemList={dropDownLocale}
			/>
		</Header>
	)
}

export default UI