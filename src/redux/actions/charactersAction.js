import { types } from '../types/index';
import axiosFetchAction from '../../utils/axiosFetchActions';

const url = 'https://swapi.dev/api/people/?page=1';
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
