import { types } from '../types/index';
import axiosFetchAction from '../../utils/axiosFetchActions';

import config from '../../config';

const url = config.services[0].route;
const method = 'GET';
const loadingType = types.USERS.LOADING;
const dataType = types.USERS.GET_USERS;
const errorType = types.USERS.ERROR;

export const getUsers = () => async (dispatch) => {
	axiosFetchAction(dispatch, url, method, {
		loadingType,
		dataType,
		errorType,
	});
};
