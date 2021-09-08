import React from 'react';
import TinySlider from 'tiny-slider-react';
import ImageOne from '../assets/image-principal-banner-1.jpg';
import ImageTwo from '../assets/image-principal-banner-2.jpg';
import ImageThree from '../assets/image-principal-banner-3.jpg';
import ImageFour from '../assets/image-principal-banner-4.jpg';

const Banner = () => {
	const arr = [
		{
			id: 1,
			urlImage: ImageOne,
		},
		{
			id: 2,
			urlImage: ImageTwo,
		},
		{
			id: 3,
			urlImage: ImageThree,
		},
		{
			id: 4,
			urlImage: ImageFour,
		},
	];
	const settings = {
		items: 1,
		swipeAngle: false,
		speed: 1000,
		slideBy: 'page',
		mode: 'gallery',
		lazyload: true,
		nav: false,
		mouseDrag: true,
		controls: false,
		controlsPosition: 'top',
		controlsText: ['<', '>'],
		loop: true,
		autoplay: true,
		autoplayButtonOutput: false,
		arrowKeys: true,
		autoplayTimeout: 8000,
	};

	const imgStyles = {
		width: '100%',
		objectFit: 'cover',
		height: '450px',
	};

	return (
		<div className='banner'>
			<TinySlider settings={settings}>
				{arr.map((img) => (
					<img
						key={img.id}
						className={`tns-lazy-img`}
						src={img.urlImage}
						data-src={img.urlImage}
						alt=''
						style={imgStyles}
					/>
				))}
			</TinySlider>
		</div>
	);
};

export default Banner;
