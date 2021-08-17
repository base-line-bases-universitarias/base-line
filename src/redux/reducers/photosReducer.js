import { types } from '../types/index';

const initialState = {
	photos: [],
	loading: false,
	error: '',
};

export const photosReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.PHOTOS.GET_PHOTOS:
			return {
				...state,
				photos: action.payload,
				loading: false,
				error: '',
			};
		case types.PHOTOS.LOADING:
			return {
				...state,
				loading: true,
			};
		case types.PHOTOS.ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
