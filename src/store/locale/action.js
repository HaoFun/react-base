import * as constants from './constant'

export const changeLocaleAction = locale => {
  return {
	  type: constants.CHANGE_LOCALE,
	  locale
  }
}