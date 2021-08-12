import React from 'react';

const CharacterList = ({ loading, character, error }) => {
	return (
		<div className='characters'>
			{loading ? (
				<div>
					<p>Loading</p>
				</div>
			) : (
				<ul className='characters__list'>
					{error.message && <p>Error: {error.message}</p>}
					{character.results &&
						character.results.map((characterItem) => (
							<li className='characters__list__item' key={characterItem.name}>
								<p className='paragraph'>Name: {characterItem.name}</p>
								<p className='paragraph'>
									Birth year: {characterItem.birth_year}
								</p>
								<p className='paragraph'>
									Eye Color: {characterItem.eye_color}
								</p>
								<p className='paragraph'>Gender: {characterItem.gender}</p>
							</li>
						))}
				</ul>
			)}
		</div>
	);
};

export default CharacterList;
