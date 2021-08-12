import { types } from '../types/index';

const initialState = {
	character: {},
	loading: false,
	error: '',
};

export const charactersReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.CHARACTERS.GET_CHARACTERS:
			return {
				...state,
				character: action.payload,
				loading: false,
				error: '',
			};
		case types.CHARACTERS.LOADING:
			return {
				...state,
				loading: true,
			};
		case types.CHARACTERS.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
