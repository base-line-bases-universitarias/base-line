import { types } from '../../../redux/types/index';

describe('auth types', () => {
	const AUTH = {
		GET_USER: '[AUTH] login',
		LOADING: '[AUTH] loading',
		ERROR: '[AUTH] error',
	};
	test('[AUTH] type', () => {
		expect(typeof types.AUTH).toBe(typeof AUTH);
	});
	test('[AUTH] login', () => {
		expect(types.AUTH.GET_USER).toBe(AUTH.GET_USER);
	});
	test('[AUTH] loading', () => {
		expect(types.AUTH.LOADING).toBe(AUTH.LOADING);
	});
	test('[AUTH] error', () => {
		expect(types.AUTH.ERROR).toBe(AUTH.ERROR);
	});
});
