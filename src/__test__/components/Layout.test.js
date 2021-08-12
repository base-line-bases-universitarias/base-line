import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import Layout from '../../components/Layout';

describe('Esta es una swuit de pruebas', () => {
	test('Debe hacer render del componente Layout', () => {
		const component = shallow(<Layout />);
		expect(component.length).toEqual(1);
		expect(component).toMatchSnapshot();
	});
});
