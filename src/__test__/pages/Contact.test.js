import React from 'react';
import { mount } from 'enzyme';

import Contact from '../../pages/Contact';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('Esta es una swuit de pruebas', () => {
	test('Debe hacer render del componente Login', () => {
		const component = mount(
			<ProviderMock>
				<Contact />
			</ProviderMock>
		);
		expect(component.length).toEqual(1);
	});
});
