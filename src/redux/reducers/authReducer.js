import { types } from '../types/index';

const initialState = {
	dataAuth: {
		auth: false,
		token: '',
		role: null,
	},
	loading: false,
	error: '',
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.AUTH.GET_USER:
			return {
				...state,
				dataAuth: action.payload,
				loading: false,
				error: '',
			};
		case types.AUTH.LOADING:
			return {
				...state,
				loading: true,
			};
		case types.AUTH.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
