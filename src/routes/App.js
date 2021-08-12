import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';

import { initAxiosInterceptors } from '../utils/auth';
import routesArr from '../utils/routesFunction';

import { AuthenticatedRoute, UnauthenticatedRoute } from './AuthRoutes';
import Layout from '../components/Layout';
import NotFound from '../pages/NotFound';
import ROUTES from './routes';

initAxiosInterceptors();

const routes = routesArr(ROUTES);

const Router = () => {
	return (
		<Routes>
			<Layout>
				<Switch>
					{routes.map(({ auth, exact, key, path, redirect, component }) => {
						const AuthRoute = auth ? AuthenticatedRoute : UnauthenticatedRoute;
						return (
							<AuthRoute
								key={key}
								exact={exact}
								component={component}
								path={path}
								redirect={redirect}
								logged={false}
								authorized={false}
							/>
						);
					})}
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</Routes>
	);
};

export default Router;
