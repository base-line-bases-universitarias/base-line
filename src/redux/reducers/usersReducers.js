import { types } from '../types/index';

const initialState = {
	users: [],
	loading: false,
	error: '',
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.USERS.GET_USERS:
			return {
				...state,
				users: action.payload,
				loading: false,
				error: '',
			};
		case types.USERS.LOADING:
			return {
				...state,
				loading: true,
			};
		case types.USERS.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
