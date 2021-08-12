import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../../pages/NotFound';

describe('Esta es una swuit de pruebas', () => {
	test('Debe hacer render del componente NotFound', () => {
		const component = shallow(<NotFound />);
		expect(component.length).toEqual(1);
	});
});
