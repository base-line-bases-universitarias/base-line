import { Redirect, Route } from 'react-router-dom';

const AuthComponent = ({
	component: Component,
	path,
	exact,
	logged,
	authorized,
}) => {
	if (logged && authorized) {
		return <Route component={Component} path={path} exact={exact} />;
	}

	return <Redirect to='/' />;
};

const NoAuthComponent = ({
	component: Component,
	path,
	exact,
	authorized,
	logged,
}) => {
	// if (logged && authorized) {
	// 	console.log(
	// 		'NoAuthComponent logged && authorized === true, auth === false'
	// 	);
	// 	return (
	// 			<Redirect to='/' />
	// 	);
	// }

	return <Route component={Component} path={path} exact={exact} />;
};

/*
  AuthenticatedRoute
  should be used for routes which require authentication
*/
export const AuthenticatedRoute = AuthComponent;

/*
  AuthenticatedRoute
  should be used for routes which not require authentication
*/
export const UnauthenticatedRoute = NoAuthComponent;
