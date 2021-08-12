import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import PrivateRoute from '../../pages/PrivateRoute';
import routesFunction from '../../utils/routesFunction';
import ROUTES__MOCK from '../../__mocks__/RoutesMock';

describe('Test para funcion de rutas', () => {
	const ROUTES = [
		{
			path: '/',
			key: 'HOME',
			exact: true,
			component: Home,
			auth: false,
		},
		{
			path: '/home',
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
	test('Tamaño de rutas', () => {
		expect(routesFunction(ROUTES__MOCK)).toEqual(ROUTES);
	});
});
