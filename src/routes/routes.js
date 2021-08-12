import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
import PrivateRoute from '../pages/PrivateRoute';

const ROUTES = [
	{
		path: ['/', '/home'],
		key: 'HOME',
		exact: true,
		component: Home,
		auth: false,
	},
	{
		path: '/contactenos',
		key: 'CONTACT',
		exact: true,
		component: Contact,
		auth: false,
	},
	{
		path: '/login',
		key: 'LOGIN',
		exact: true,
		component: Login,
		auth: false,
	},
	{
		path: '/home-private',
		key: 'PRIVATE',
		exact: true,
		component: PrivateRoute,
		auth: true,
	},
	{
		path: '/private',
		key: 'PRIVATE2',
		exact: true,
		component: PrivateRoute,
		auth: true,
	},
];

export default ROUTES;
