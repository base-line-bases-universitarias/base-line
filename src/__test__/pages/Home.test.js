import React from 'react';
import { shallow, mount } from 'enzyme';

import Home from '../../pages/Home';
import ProviderMock from '../../__mocks__/ProviderMock';
import CharacterMock from '../../__mocks__/CharacterMock';

describe('Esta es una swuit de pruebas', () => {
	test('Debe hacer render del componente Home', () => {
		const showModalAction = jest.fn();
		const hideModalAction = jest.fn();
		const getCharacters = jest.fn();

		const modal = { show_modal: false };
		const characters = CharacterMock;

		const component = shallow(
			<ProviderMock>
				<Home
					showModalAction={showModalAction}
					hideModalAction={hideModalAction}
					getCharacters={getCharacters}
					modal={modal}
					characters={characters}
				/>
			</ProviderMock>
		);
		expect(component.length).toEqual(1);
	});

	test('Debe hacer render del componente textos', () => {
		const showModalAction = jest.fn();
		const hideModalAction = jest.fn();
		const getCharacters = jest.fn();

		const modal = { show_modal: false };
		const characters = CharacterMock;
		const component = mount(
			<ProviderMock>
				<Home
					showModalAction={showModalAction}
					hideModalAction={hideModalAction}
					getCharacters={getCharacters}
					modal={modal}
					characters={characters}
				/>
			</ProviderMock>
		);

		expect(component.find('button').text()).toEqual('Click me');
		expect(component.find('.home__container__title').text()).toEqual('Home');
	});
});
