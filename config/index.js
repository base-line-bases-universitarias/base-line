import dotenv from 'dotenv';

dotenv.config();

const config = {
	auth: {
		text: 'hola mijos',
		keyToken: process.env.PORT,
	},
};

export default config;
