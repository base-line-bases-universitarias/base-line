import ROUTES from '../../routes/routes';
import RoutesMock from '../../__mocks__/RoutesMock';

describe('Garantizar que todas las rutas sean las usadas', () => {
	test('Cantidad de rutas iguales', () => {
		expect(ROUTES.length).toBe(RoutesMock.length);
	});
	test('Igualdad de arrays', () => {
		expect(ROUTES).toEqual(RoutesMock);
	});
	test('Comprobar propiedad de rutas autorizadas', () => {
		expect(ROUTES.forEach((item) => item.auth)).toEqual(
			RoutesMock.forEach((item) => item.auth)
		);
	});
	test('Comprobar propiedad de rutas', () => {
		expect(ROUTES.forEach((item) => item.path)).toEqual(
			RoutesMock.forEach((item) => item.path)
		);
	});
	test('Comprobar propiedad de componente a rederizar', () => {
		expect(ROUTES.forEach((item) => item.component)).toEqual(
			RoutesMock.forEach((item) => item.component)
		);
	});
	test('Comprobar propiedad key', () => {
		expect(ROUTES.forEach((item) => item.key)).toEqual(
			RoutesMock.forEach((item) => item.key)
		);
	});
	test('Comprobar propiedad exact', () => {
		expect(ROUTES.forEach((item) => item.exact)).toEqual(
			RoutesMock.forEach((item) => item.exact)
		);
	});
});
