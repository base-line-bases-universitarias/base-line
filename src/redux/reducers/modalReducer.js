import { types } from '../types';

const initialState = {
	show_modal: false,
};

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.MODAL.SHOW_MODAL:
			return {
				...state,
				show_modal: true,
			};
		case types.MODAL.HIDE_MODAL:
			return {
				...state,
				show_modal: false,
			};
		default:
			return state;
	}
};
