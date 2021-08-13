import React from 'react';
import TinySlider from 'tiny-slider-react';

import '../styles/pages/_login.scss';

const Login = () => {
	const settings = {
		lazyload: true,
		nav: true,
		mouseDrag: true,
		loop: true,
		items: 1,
		gutter: 5,
		autoPlay: true,
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
		'http://d2ji2mue1p384z.cloudfront.net/img/480x360/162951.jpg',
		'http://d2ji2mue1p384z.cloudfront.net/img/480x360/162465.jpg',
		'http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg',
		'http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg',
		'http://d2ji2mue1p384z.cloudfront.net/img/480x360/220048.jpg',
	];

	const loadingImage =
		'data:image/gif;base64,\
  R0lGODlhAQABAPAAAMzMzAAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==';

	const clickEvent = (slide) => {
		console.log(slide);
	};

	const imgStyles = {
		width: '100%',
		height: '320px',
		objectFit: 'cover',
	};
	return (
		<div className='login'>
			<div className='login__container'>
				<p> Login</p>
				<TinySlider settings={settings} onInit={clickEvent}>
					{imgs.map((el, index) => (
						<div key={index} style={{ position: 'relative' }}>
							<img
								className={`tns-lazy-img`}
								src={loadingImage}
								data-src={el}
								alt=''
								style={imgStyles}
							/>
						</div>
					))}
				</TinySlider>
			</div>
		</div>
	);
};

export default Login;
