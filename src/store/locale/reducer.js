import * as constants from './constant'
import { fromJS } from 'immutable'
import config from '@utils/config'

const localStorageLocale = localStorage.getItem('react_locale')
const defaultState = fromJS({
  locale: localStorageLocale ? localStorageLocale : config.locale,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOCALE:
	    localStorage.setItem('react_locale', action.locale)
      return state.merge({
        locale: action.locale
      })
    default:
      return state
  }
}