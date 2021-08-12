import { types } from '../../../redux/types/index';

describe('auth types', () => {
	const USERS = {
		GET_USERS: '[USER] get_users',
		LOADING: '[USER] loading',
		ERROR: '[USER] error',
	};

	test('[AUTH] type', () => {
		expect(typeof types.USERS).toBe(typeof USERS);
	});
	test('[USER] get_users', () => {
		expect(types.USERS.GET_USERS).toBe(USERS.GET_USERS);
	});
	test('[USER] loading', () => {
		expect(types.USERS.LOADING).toBe(USERS.LOADING);
	});
	test('[USER] error', () => {
		expect(types.USERS.ERROR).toBe(USERS.ERROR);
	});
});
