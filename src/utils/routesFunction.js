const routesArr = (ROUTES) =>
	ROUTES.map((route) => {
		if (route.path instanceof Array) {
			return route.path.map((path) => ({
				...route,
				path,
			}));
		}
		return route;
	}).flat();

export default routesArr;
