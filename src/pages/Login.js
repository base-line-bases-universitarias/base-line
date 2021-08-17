import React, { Fragment, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import TinySlider from 'tiny-slider-react';

import { getPhotos } from '../redux/actions/photosAction';
import '../styles/pages/_login.scss';

const Login = ({ photos, getPhotos }) => {
	const settings = {
		lazyload: true,
		nav: false,
		mouseDrag: true,
		controls: true,
		controlsPosition: 'top',
		controlsText: ['<', '>'],
		loop: true,
		items: 1,
		gutter: 5,
		center: true,
		autoplay: true,
		autoplayButtonOutput: false,
		speed: 300,
		responsive: {
			420: {
				items: 2,
			},
			800: {
				items: 3,
			},
		},
	};

	const imgs = [
		'https://via.placeholder.com/600/92c952',
		'https://via.placeholder.com/600/771796',
		'https://via.placeholder.com/600/24f355',
		'https://via.placeholder.com/600/d32776',
		'https://via.placeholder.com/600/f66b97',
		'https://via.placeholder.com/600/56a8c2',
		'https://via.placeholder.com/600/b0f7cc',
		'https://via.placeholder.com/600/51aa97',
		'https://via.placeholder.com/600/810b14',
		'https://via.placeholder.com/600/66b7d2',
		'https://via.placeholder.com/600/197d29',
		'https://via.placeholder.com/600/f9cee5',
	];

	const loadingImage = `data:image/gif;base64,\
  R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

	const imgStyles = {
		width: '90%',
		height: '320px',
		objectFit: 'cover',
	};

	const getPhotosData = useCallback(() => {
		getPhotos();
	}, [getPhotos]);

	useEffect(() => {
		getPhotosData();
	}, [getPhotosData]);

	console.log(photos.loading);

	return (
		<div className='login'>
			<div className='login__container'>
				<p> Login</p>
				<div className='login__container__slider'>
					{photos.loading ? (
						<p>Loading</p>
					) : (
						// <Fragment>
						// 	<TinySlider settings={settings}>
						// 		{imgs.map((el, index) => (
						// 			<div key={index} className='container-image'>
						// 				<img
						// 					className={`tns-lazy-img`}
						// 					src={loadingImage}
						// 					data-src={el}
						// 					alt=''
						// 					style={imgStyles}
						// 				/>
						// 				<p>
						// 					Lorem ipsum dolor sit amet consectetur adipisicing elit.
						// 					Eaque suscipit ullam porro minima nam vitae numquam
						// 					laudantium commodi illum accusamus qui voluptatem.
						// 				</p>
						// 			</div>
						// 		))}
						// 	</TinySlider>
						// </Fragment>
						<div>{JSON.stringify(imgs)}</div>
					)}
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (reducers) => {
	const { photos } = reducers;
	return { photos };
};

const mapDispatchToProps = { getPhotos };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
