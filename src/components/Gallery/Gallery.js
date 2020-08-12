import React, {
	useState,
	useEffect,
	useLayoutEffect,
	forwardRef,
	useRef,
	Suspense,
	lazy,
} from 'react';
// import Image from './../Image/Image';
import './Gallery.scss';

const LazyImage = lazy(() => import('./../Image/Image'));

const Fallback = (props) => {
	return <div style={{
        height: '100%',
        width: '100%',
        minHeight: 120,
        minWidth: 120,
        backgroundColor: getBGColor(),
        transition: '.3s ease',
    }}></div>;
};

const getBGColor = () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    let RG = randomColor.substr(0, 4)
    let forceBlueish = RG.concat('ff')
    console.log(forceBlueish)
    return `#${forceBlueish}77`
}

const Gallery = (props) => {
	const [justRan, setJustRan] = useState(false);
	const [running, setRunning] = useState(false);
	const [heights, setHeights] = useState({ a: 0, b: 0, c: 0 });
	const [didLazyLoad, setDidLazyLoad] = useState(false);

	// useLayoutEffect(() => {
	// 	checkColHeights()
	// }, [props.photos.colC.length]);

	// 	const a = useRef(null)
	// 	const b = useRef(null)
	// 	const c = useRef(null)
	const galleryRef = useRef(null);

	// useLayoutEffect(() => {
	//     if (didLazyLoad) {
	//         return
	//     }
	//     setTimeout(() => {

	//         document.addEventListener("scroll", checkScroll())
	//     }, 3000)
	// })

	// const checkColHeights = () => {

	// 	let currentHeights = {
	// 		a: a.clientHeight,
	// 		b: b.clientHeight,
	// 		c: c.clientHeight,
	// 	};

	// 	let shortest = Math.min(
	// 		currentHeights.a,
	// 		currentHeights.b,
	// 		currentHeights.c
	// 	);

	// 	let len = props.photos.colA.length

	// 	let options = {
	// 		root: document.getElementById('scroll-watch'),
	// 		rootMargin: '0px',
	// 		threshold: 1.0
	// 	  }

	// 	let obs = new IntersectionObserver(doLog, options)

	// 	let el = document.getElementById('colA')

	// 	obs.observe(el)

	// };

	// const doLog = (entries, obs) => {
	// 	entries.forEach(entry => {
	// 		console.log(entry, obs)
	// 	})
	// 	console.log('yeah')

	// }

	// const doGetImages = () => {
	// 	setRunning(true)
	// 	return props.getImages();
	// };
	let lastRef = useRef();

	const checkScroll = () => {
		console.log('hi');
		if (didLazyLoad) {
			return;
		}
		if (!lastRef) {
			return;
		}
		if (lastRef && lastRef.current) {
			console.log('hi again');
			let scrollHeight = window.pageYOffset;
			let bottom = lastRef.current.clientTop;
			let withOffset = bottom - 300;
			console.log(scrollHeight, bottom, withOffset);
			if (scrollHeight >= withOffset) {
				async function doGetImages() {
					await props.getImages();
					setDidLazyLoad(true);
				}
				doGetImages();
			}
		}
	};

	const mapColumn = (col, hasLast) => {
		console.log(hasLast);
		console.log(lastRef, lastRef.current);
		let photoSet = col.map((image, idx) => (
			<Suspense fallback={<Fallback />}>
				<LazyImage
					imageSource={image.url}
					altTag='randomly generated from Unsplash.com'
					id={image.id}
					downloadLink={image.downloadLink}
					key={`img-${image.id}`}
					ref={hasLast && idx === col.length - 1 ? lastRef : null}
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
