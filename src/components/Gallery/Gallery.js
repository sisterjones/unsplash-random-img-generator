import React, {
	useRef,
	Suspense,
	lazy,
} from 'react';
// import Image from './../Image/Image';
import './Gallery.scss';

const LazyImage = lazy(() => import('./../Image/Image'));

const Fallback = () => {
	return (
		<div
			style={{
				height: '100%',
				width: '100%',
				minHeight: 120,
				minWidth: 120,
				backgroundColor: getBGColor(),
				transition: '.3s ease',
			}}
		></div>
	);
};

const getBGColor = () => {
	let randomColor = Math.floor(Math.random() * 16777215).toString(16);
	let RG = randomColor.substr(0, 4);
	let forceBlueish = RG.concat('ff');
	console.log(forceBlueish);
	return `#${forceBlueish}77`;
};

const Gallery = (props) => {

    const galleryRef = useRef(null);
    
	const mapColumn = (col) => {
		let photoSet = col.map((image) => (
			<Suspense fallback={<Fallback />}>
				<LazyImage
					imageSource={image.url}
					altTag='randomly generated from Unsplash.com'
					id={image.id}
					downloadLink={image.downloadLink}
					key={`img-${image.id}`}
				/>
			</Suspense>
		));
		return photoSet;
	};

	return (
		<div className={`gallery gallery---${props.theme}`}>
			<div id='scroll-watch'></div>
			<div
				id='gallery'
				className='gallery__wrapping-column'
				ref={galleryRef}
			>
				<div
					id='colA'
					className='gallery__image-column gallery__image-column--left'
				>
					{mapColumn(props.photos.colA)}
				</div>
				<div
					id='colB'
					className='gallery__image-column gallery__image-column--center'
				>
					{mapColumn(props.photos.colB)}
				</div>
				<div
					id='colC'
					className='gallery__image-column gallery__image-column--right'
				>
					{mapColumn(props.photos.colC, true)}
				</div>
			</div>
		</div>
	);
};
export default Gallery;
