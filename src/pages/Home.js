import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import Modal from '../components/Modal';
import CharacterList from '../components/CharacterList';

import { showModalAction, hideModalAction } from '../redux/actions/modalAction';
import { getCharacters } from '../redux/actions/charactersAction';

const Home = ({
	showModalAction,
	hideModalAction,
	modal,
	characters,
	getCharacters,
}) => {
	const { show_modal } = modal;
	const { character, loading, error } = characters;
	const handleClickOpenModal = () => {
		showModalAction();
	};

	const handleClickCloseModal = () => {
		hideModalAction();
	};

	const getCharactersData = useCallback(() => {
		if (!character.results) {
			getCharacters();
		}
	}, [getCharacters, character.results]);

	useEffect(() => {
		getCharactersData();
	}, [getCharactersData]);

	return (
		<div className='home'>
			<div className='home__container'>
				<p className='home__container__title'>Home</p>
				{!show_modal && (
					<button onClick={handleClickOpenModal}>Click me</button>
				)}
				<CharacterList loading={loading} character={character} error={error} />
			</div>
			{show_modal && <Modal handleClickCloseModal={handleClickCloseModal} />}
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { modal, characters } = reducers;
	return { modal, characters };
};

const mapDispatchToProps = { showModalAction, hideModalAction, getCharacters };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
