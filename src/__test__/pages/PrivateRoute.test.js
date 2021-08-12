import React from 'react';
import { shallow } from 'enzyme';

import PrivateRoute from '../../pages/PrivateRoute';

describe('Esta es una swuit de pruebas', () => {
	test('Debe hacer render del componente PrivateRoute', () => {
		const component = shallow(<PrivateRoute />);
		expect(component.length).toEqual(1);
	});
});
