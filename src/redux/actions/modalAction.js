import { types } from '../types/index';

export const showModalAction = () => (dispatch) => {
	dispatch({
		type: types.MODAL.SHOW_MODAL,
	});
};

export const hideModalAction = () => (dispatch) => {
	dispatch({
		type: types.MODAL.HIDE_MODAL,
	});
};
