import Loadable from 'react-loadable'
import Loading from '@components/Loading'

// loadable base setting
const LoadingSetting = {
	loading: Loading,
	delay: 200,
	timeout: 2000
}

const HomePage = Loadable({
	loader: () => import('@/views/Home'),
	...LoadingSetting
})

const MainPage = Loadable({
	loader: () => import('@/views/Main'),
	...LoadingSetting
})

const MinorPage = Loadable({
	loader: () => import('@/views/Minor'),
	...LoadingSetting
})

const LoginPage = Loadable({
	loader: () => import('@/views/Login'),
	...LoadingSetting
})

export const guestRoute = [
	{path: '/login', exact: true, name: 'login', component: LoginPage}
]

export const authRoute = [
	{path: '/main', exact: false, name: 'main', layout: 'main', component: MainPage},
	{path: '/minor', exact: false, name: 'minor', layout: 'main', component: MinorPage},
	{path: '/', exact: true, name: 'home', layout: 'main', component: HomePage},
]