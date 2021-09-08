import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import TinySlider from 'tiny-slider-react';

import Formulario from '../components/Formulario';

import { getPhotos } from '../redux/actions/photosAction';
import '../styles/pages/_login.scss';

const Login = ({ photos, getPhotos }) => {
	const settings = {
		lazyload: false,
		nav: false,
		mouseDrag: true,
		controls: true,
		controlsPosition: 'top',
		controlsText: ['<', '>'],
		loop: true,
		items: 1,
		gutter: 3,
		center: true,
		autoplay: true,
		autoplayButtonOutput: false,
		speed: 300,
		responsive: {
			470: {
				items: 2,
			},
			800: {
				items: 3,
			},
		},
	};

	const imgStyles = {
		width: '250px',
		height: '320px',
		objectFit: 'cover',
	};

	const getPhotosData = useCallback(() => {
		if (photos.photos.length === 0) {
			getPhotos();
		}
	}, [getPhotos, photos.photos]);

	useEffect(() => {
		getPhotosData();
	}, [getPhotosData]);

	return (
		<div className='login'>
			<div className='login__container'>
				<p> Login</p>
				<Formulario />
				{!photos.loading ? (
					<div className='login__container__slider'>
						<TinySlider settings={settings}>
							{photos.photos
								.filter((ele, index) => index <= 60)
								.map((el, index) => (
									<div key={index} className='container-image'>
										<img
											className='image tns-lazy-img'
											src={el.url}
											data-src={el.url}
											alt=''
											style={imgStyles}
										/>
										<p>hello {index}</p>
									</div>
								))}
						</TinySlider>
					</div>
				) : (
					<p>Cargando...</p>
				)}
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
