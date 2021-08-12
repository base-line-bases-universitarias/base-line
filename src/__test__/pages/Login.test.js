import React from 'react';
import { mount } from 'enzyme';

import Login from '../../pages/Login';

describe('Esta es una swuit de pruebas', () => {
	test('Debe hacer render del componente Login', () => {
		const component = mount(<Login />);
		expect(component.length).toEqual(1);
	});
});
