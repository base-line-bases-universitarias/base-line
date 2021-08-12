import { AUTH } from '../types/authTypes';

export const getLogin = () => async (dispatch) => {
	dispatch({
		type: AUTH.LOADING,
	});

	try {
		const respuesta = {
			auth: true,
			token:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
			role: 0,
		};
		dispatch({
			type: AUTH.GET_USER,
			payload: respuesta,
		});
	} catch (error) {
		dispatch({
			type: AUTH.ERROR,
			payload: 'Error in the login',
		});
	}
};

export const getLogout = () => async (dispatch) => {
	dispatch({
		type: AUTH.LOADING,
	});

	try {
		const respuesta = {
			auth: false,
			token: '',
			role: null,
		};
		dispatch({
			type: AUTH.GET_USER,
			payload: respuesta,
		});
	} catch (error) {
		dispatch({
			type: AUTH.ERROR,
			payload: 'Error in the login',
		});
	}
};
