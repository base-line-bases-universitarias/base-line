import Axios from 'axios';

import routes from '../config/index';

const TOKEN_KEY = routes.auth.keyToken;

export const setToken = (token) => {
	localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = () => {
	return localStorage.getItem(TOKEN_KEY);
};

export const deleteToken = () => {
	localStorage.removeItem(TOKEN_KEY);
};

const compareRoute = (routeAuth, config) =>
	routeAuth.every((item) => {
		return item.route !== config.url;
	});

export const initAxiosInterceptors = () => {
	Axios.interceptors.request.use((config) => {
		const token = getToken();
		const routeAuth = routes.services.filter((item) => item.auth === true);
		const flag = compareRoute(routeAuth, config);

		if (token && !flag) {
			config.headers.Authorization = `bearer ${token}`;
		}
		return config;
	});

	Axios.interceptors.response.use(
		(response) => response,
		(error) => {
			if (error.response) {
				switch (error.response.status) {
					case 401:
						window.location = '/login';
						break;
					case 404:
						return Promise.reject(error.message);
					default:
						return Promise.reject(error);
				}
			}
			return Promise.reject(error);
		}
	);
};
