import { takeLatest, put, call, all } from 'redux-saga/effects'
import axios from 'axios'
import * as constants from './constant'
import { login_api, auth_me_api } from '@/utils/api'
import { fetchUserSagaAction, fetchUserSucceededAction, fetchUserFailureAction, fetchUserTokenAction } from './action'
import { notify } from '@/plugins/notify'
import { I18n } from '@/plugins/IntlProvider'

function* watchLogin() {
	yield takeLatest(constants.LOGIN, login)
}

function* watchFetchUser() {
	yield takeLatest(constants.FETCH_USER, fetchUser)
}

function* login(action) {
	try {
		const response = yield axios.post(login_api, {
				account: action.account,
				password: action.password
	    })
		yield all([
			put(fetchUserTokenAction(response.data.data.access_token, response.data.data.expires)),
			put(fetchUserSagaAction(action.callback))
		])
	} catch (e) {
		
	}
}

function* fetchUser(action) {
	try {
		const response = yield axios.get(auth_me_api)
		yield all([
			put(fetchUserSucceededAction({
				...response.data.data,
			})),
			call(notify, I18n.formatMessage(
				{id: 'welcome'},
				{username: `🦄 ${response.data.data.name}`})),
			call(action.callback)
		])
	} catch (e) {
		yield put(fetchUserFailureAction(e.message))
	}
}

export const authSaga = [
	watchLogin(),
	watchFetchUser()
]