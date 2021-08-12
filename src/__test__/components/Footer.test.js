import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../../components/Footer';

describe('Esta es una swuit de pruebas', () => {
	test('Debe hacer render del componente Footer', () => {
		const component = shallow(<Footer />);
		expect(component.length).toEqual(1);
		expect(component).toMatchSnapshot();
	});
	test('Comprobar cantidad de link del menu principal', () => {
		const component = shallow(<Footer />);
		const arr = component.find('.option__link').length;
		expect(arr).toEqual(3);
	});
	test('Comprobar texto de cada uno de los links del menu principal', () => {
		const component = shallow(<Footer />);
		const links = ['Inicio', 'Contactenos', 'Login'];
		component.find('.option__link').forEach((item, index) => {
			expect(item.text()).toEqual(links[index]);
		});
	});
});
