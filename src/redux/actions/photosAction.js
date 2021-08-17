import { types } from '../types/index';
import axiosFetchAction from '../../utils/axiosFetchActions';

import config from '../../config';

const url = config.services[2].route;
const method = 'GET';
const loadingType = types.PHOTOS.LOADING;
const dataType = types.PHOTOS.GET_PHOTOS;
const errorType = types.PHOTOS.ERROR;

export const getPhotos = () => async (dispatch) => {
	axiosFetchAction(dispatch, url, method, {
		loadingType,
		dataType,
		errorType,
	});
};
