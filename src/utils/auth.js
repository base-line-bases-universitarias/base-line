import Axios from 'axios';

const TOKEN_KEY = 'TEST_TOKEN';

export const setToken = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
	return localStorage.getItem(TOKEN_KEY);
};

export const deleteToken = () => {
	localStorage.removeItem(TOKEN_KEY);
};

export const initAxiosInterceptors = () => {
	Axios.interceptors.request.use((config) => {
		const token = getToken();

		if (token) {
			config.headers.Authorization = `bearer ${token}`;
		}

		return config;
	});

	Axios.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response) {
				switch (error.response.status) {
					// case 401:
					// 	window.location = '/login';
					// 	break;
					default:
						return Promise.reject(error);
				}
			}
			return Promise.reject(error);
		}
	);
};
