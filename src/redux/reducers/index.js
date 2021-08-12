import { combineReducers } from 'redux';
import { modalReducer } from './modalReducer';
import { authReducer } from './authReducer';
import { charactersReducer } from './charactersReducer';
import { usersReducer } from './usersReducers';

export default combineReducers({
	modal: modalReducer,
	auth: authReducer,
	characters: charactersReducer,
	users: usersReducer,
});
