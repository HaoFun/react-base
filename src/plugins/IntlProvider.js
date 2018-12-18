import { intlShape } from 'react-intl'

let INTL
const IntlProvider = (props, context) => {
	INTL = context.intl
	return props.children
}

IntlProvider.contextTypes = {
	intl: intlShape.isRequired
}

let instance
class IntlTranslator {
	constructor() {
		if (!instance) {
			instance = this
		}
		return instance
	}

	formatMessage (message, values={}) {
		return INTL.formatMessage(message, values)
	}
}

export const I18n = new IntlTranslator()
export default IntlProvider