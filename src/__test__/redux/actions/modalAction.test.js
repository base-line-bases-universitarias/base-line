import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { types } from '../../../redux/types/index';
import { showModalAction } from '../../../redux/actions/modalAction';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('characterActions', () => {
	const initialState = {
		modal: {
			show_modal: false,
		},
	};
	const store = mockStore(initialState);
	test('Respuesta de data', () => {
		// expect(store.dispatch(showModalAction())).toBe({
		// 	type: types.MODAL.SHOW_MODAL,
		// });
		// console.log(store.getState());
		// console.log(store.dispatch({ type: types.MODAL.SHOW_MODAL }));
		// console.log(showModalAction());
	});
});
