const {
	REACT_APP_TOKEN_KEY_AUTH,
	REACT_APP_PORT,
	NODE_ENV,
	REACT_APP_CHARACTERS_SERVICES,
	REACT_APP_USERS_SERVICES,
	REACT_APP_TODOS_SERVICES,
} = process.env;

const config = {
	envs: {
		enviroment: NODE_ENV,
	},
	auth: {
		keyToken: REACT_APP_TOKEN_KEY_AUTH,
	},
	ports: {
		port: REACT_APP_PORT,
	},
	services: [
		{
			key: 'REACT_APP_USERS_SERVICES',
			route: REACT_APP_USERS_SERVICES,
			auth: true,
		},
		{
			key: 'REACT_APP_CHARACTERS_SERVICES',
			route: REACT_APP_CHARACTERS_SERVICES,
			auth: true,
		},
		{
			key: 'REACT_APP_TODOS_SERVICES',
			route: REACT_APP_TODOS_SERVICES,
			auth: true,
		},
		{
			key: 'REACT_APP_TODOS_SERVICES',
			route: REACT_APP_TODOS_SERVICES,
			auth: false,
		},
	],
};

export default config;
