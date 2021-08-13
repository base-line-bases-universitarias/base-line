import { types } from '../types/index';
import axiosFetchAction from '../../utils/axiosFetchActions';
import config from '../../config';

const url = config.services[1].route;
const method = 'GET';
const loadingType = types.CHARACTERS.LOADING;
const dataType = types.CHARACTERS.GET_CHARACTERS;
const errorType = types.CHARACTERS.ERROR;

export const getCharacters = () => async (dispatch) => {
	axiosFetchAction(dispatch, url, method, {
		loadingType,
		dataType,
		errorType,
	});
};
