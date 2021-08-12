import { types } from '../../../redux/types/index';
import { authReducer } from '../../../redux/reducers/authReducer';

describe('Auth Reducer', () => {
	const initialState = {
		dataAuth: {
			auth: false,
			token: '',
			role: null,
		},
		loading: false,
		error: '',
	};

	test('susses', () => {
		const action = {
			type: types.AUTH.GET_USER,
			payload: {
				auth: true,
				token:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
				role: 0,
			},
		};

		expect(authReducer(initialState, action)).toEqual({
			...initialState,
			dataAuth: action.payload,
			loading: false,
			error: '',
		});
	});

	test('loading', () => {
		const action = { type: types.AUTH.LOADING };

		expect(authReducer(initialState, action)).toEqual({
			...initialState,
			loading: true,
		});
	});

	test('error', () => {
		const action = {
			type: types.AUTH.ERROR,
			payload: 'Error en la peticion',
		};

		expect(authReducer(initialState, action)).toEqual({
			...initialState,
			loading: false,
			error: action.payload,
		});
	});
});
