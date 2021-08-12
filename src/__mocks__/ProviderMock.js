import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { store } from '../redux/store';

const history = createBrowserHistory();

const ProviderMock = ({ children }) => (
	<Provider store={store}>
		<Router history={history}>{children}</Router>
	</Provider>
);

export default ProviderMock;
