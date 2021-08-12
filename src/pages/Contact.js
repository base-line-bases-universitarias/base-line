import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import { getUsers } from '../redux/actions/usersActions';

const Contact = ({ getUsers, users }) => {
	const getUserList = useCallback(() => {
		if (!users.users.length) {
			getUsers();
		}
	}, [getUsers, users.users.length]);

	useEffect(() => {
		getUserList();
	}, [getUserList]);

	return (
		<div className='contact'>
			<div className='contact__container'>
				<p>Contact</p>
				{!users.loading ? (
					<ul className='characters__list'>
						{users.error && <p>Hay error!!!: {users.error.message}</p>}
						{users.users &&
							users.users.map((user) => (
								<li className='characters__list__item' key={user.id}>
									<p className='paragraph'>Name: {user.name}</p>
									<p className='paragraph'>Username: {user.username}</p>
									<p className='paragraph'>email: {user.email}</p>
									<p className='paragraph'>Website: {user.website}</p>
								</li>
							))}
					</ul>
				) : (
					<p>Loading</p>
				)}
			</div>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { users } = reducers;
	return { users };
};

const mapDispatchToProps = { getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
