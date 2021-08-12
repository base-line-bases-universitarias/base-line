import { types } from '../../../redux/types/index';
import { usersReducer } from '../../../redux/reducers/usersReducers';
import { UsersMock } from '../../../__mocks__/UsersMock';

describe('Users Reducer', () => {
	const initialState = {
		users: [],
		loading: false,
		error: '',
	};

	test('susses', () => {
		const action = {
			type: types.USERS.GET_USERS,
			payload: UsersMock,
		};

		expect(usersReducer(initialState, action)).toEqual({
			...initialState,
			users: action.payload,
			loading: false,
			error: '',
		});
	});

	test('loading', () => {
		const action = { type: types.USERS.LOADING };

		expect(usersReducer(initialState, action)).toEqual({
			...initialState,
			loading: true,
		});
	});

	test('error', () => {
		const action = {
			type: types.USERS.ERROR,
			payload: 'Error en la peticion',
		};

		expect(usersReducer(initialState, action)).toEqual({
			...initialState,
			loading: false,
			error: action.payload,
		});
	});
});
