import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import en_US from '@/locales/en-US'
import zh_TW from '@/locales/zh-Hant'

addLocaleData([...en, ...zh])

const I18nProvider = ({locale, children, localeMessage}) => {
	return (
		<IntlProvider key={locale} locale={locale} messages={localeMessage}>
			{children}
		</IntlProvider>
	)
}

function setLocale(locale) {
	switch (locale) {
		case 'en-US':
			return en_US
		case 'zh-Hant':
			return zh_TW
		default:
			return en_US
	}
}

const mapStateToProps = state => ({
	locale: state.getIn(['locale', 'locale']),
	localeMessage: setLocale(state.getIn(['locale', 'locale']))
})

I18nProvider.propTypes = {
	locale: PropTypes.string.isRequired,
	localeMessage: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(I18nProvider)