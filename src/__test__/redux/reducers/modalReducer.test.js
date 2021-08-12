import { types } from '../../../redux/types/index';
import { modalReducer } from '../../../redux/reducers/modalReducer';

describe('Modal Reducer', () => {
	test('Show Modal', () => {
		const action = { type: types.MODAL.SHOW_MODAL };
		const initialState = {
			show_modal: false,
		};

		expect(modalReducer(initialState, action)).toEqual({
			...initialState,
			show_modal: true,
		});
	});

	test('Hide Modal', () => {
		const action = { type: types.MODAL.HIDE_MODAL };
		const initialState = {
			show_modal: false,
		};

		expect(modalReducer(initialState, action)).toEqual({
			...initialState,
			show_modal: false,
		});
	});
});
