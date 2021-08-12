import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import App from './routes/App';

import './styles/styles.scss';

import dotenv from 'dotenv';

console.log(dotenv.config());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
