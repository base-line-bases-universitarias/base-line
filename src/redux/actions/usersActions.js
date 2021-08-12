import { types } from '../types/index';
import axiosFetchAction from '../../utils/axiosFetchActions';

const url = 'https://jsonplaceholder.typicode.com/users';
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
