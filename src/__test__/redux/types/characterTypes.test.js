import { types } from '../../../redux/types/index';

describe('auth types', () => {
	const CHARACTERS = {
		GET_CHARACTERS: '[CHARACTERS] get_characters',
		LOADING: '[CHARACTERS] loading',
		ERROR: '[CHARACTERS] error',
	};

	test('[AUTH] type', () => {
		expect(typeof types.CHARACTERS).toBe(typeof CHARACTERS);
	});
	test('[USER] get_users', () => {
		expect(types.CHARACTERS.GET_CHARACTERS).toBe(CHARACTERS.GET_CHARACTERS);
	});
	test('[USER] loading', () => {
		expect(types.CHARACTERS.LOADING).toBe(CHARACTERS.LOADING);
	});
	test('[USER] error', () => {
		expect(types.CHARACTERS.ERROR).toBe(CHARACTERS.ERROR);
	});
});
