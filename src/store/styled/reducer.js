import * as constants from './constant'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  width: window.innerWidth,
  height: window.innerHeight,
	miniNavbar: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_WINDOW_SIZE:
	    action.width < 769 ?
		    document.body.classList.add('body-small'):
		    document.body.classList.remove('body-small')
      return state.merge({
        width: action.width,
        height: action.height
      })
	  case constants.TOGGLE_MINI_NAVBAR:
		  state.get('miniNavbar') ?
	      document.body.classList.remove("mini-navbar"):
	      document.body.classList.add("mini-navbar")
      return state.merge({
	      miniNavbar: !state.get('miniNavbar')
      })
    default:
      return state
  }
}