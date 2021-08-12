import { types } from '../../../redux/types/index';
import { charactersReducer } from '../../../redux/reducers/charactersReducer';
import { CharacterMock } from '../../../__mocks__/CharacterMock';

describe('Character Reducer', () => {
	const initialState = {
		character: {},
		loading: false,
		error: '',
	};

	test('susses', () => {
		const action = {
			type: types.CHARACTERS.GET_CHARACTERS,
			payload: CharacterMock,
		};

		expect(charactersReducer(initialState, action)).toEqual({
			...initialState,
			character: action.payload,
			loading: false,
			error: '',
		});
	});

	test('loading', () => {
		const action = { type: types.CHARACTERS.LOADING };

		expect(charactersReducer(initialState, action)).toEqual({
			...initialState,
			loading: true,
		});
	});

	test('error', () => {
		const action = {
			type: types.CHARACTERS.ERROR,
			payload: 'Error en la peticion',
		};

		expect(charactersReducer(initialState, action)).toEqual({
			...initialState,
			loading: false,
			error: action.payload,
		});
	});
});
