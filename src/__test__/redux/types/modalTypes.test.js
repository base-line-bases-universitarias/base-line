import { types } from '../../../redux/types/index';

describe('auth types', () => {
	const MODAL = {
		SHOW_MODAL: '[UI] Show Modal',
		HIDE_MODAL: '[UI] Hide Modal',
	};

	test('[AUTH] type', () => {
		expect(typeof types.MODAL).toBe(typeof MODAL);
	});
	test('[USER] get_users', () => {
		expect(types.MODAL.SHOW_MODAL).toBe(MODAL.SHOW_MODAL);
	});
	test('[USER] loading', () => {
		expect(types.MODAL.HIDE_MODAL).toBe(MODAL.HIDE_MODAL);
	});
});
