import * as constants from './constant'

export const setWindowSizeAction = (width, height) => {
  return {
	  type: constants.CHANGE_WINDOW_SIZE,
	  width,
	  height
  }
}

export const toggleMiniNavbarAction = () => {
	return {
		type: constants.TOGGLE_MINI_NAVBAR
	}
}

export const setBaseLayoutAction = (bool) => {
	return {
		type: constants.SET_BASE_LAYOUT,
		isBaseLayout: bool
	}
}