import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<div className='footer'>
			<nav className='footer__nav'>
				<ul className='footer__nav__list'>
					<li className='option'>
						<NavLink
							activeClassName='active'
							className='option__link'
							to='/'
							exact
						>
							Inicio
						</NavLink>
					</li>
					<li className='option'>
						<NavLink
							activeClassName='active'
							className='option__link'
							to='/contactenos'
							exact
						>
							Contactenos
						</NavLink>
					</li>
					<li className='option'>
						<NavLink
							activeClassName='active'
							className='option__link'
							to='/login'
							exact
						>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Footer;
