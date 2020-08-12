import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import Controls from './../Controls/Controls';
import Gallery from './../Gallery/Gallery';
import * as photoAPI from '../../util/api';
import { Spin } from 'antd';
import './Wrapper.scss';

const Wrapper = (props) => {
	const [photos, setPhotos] = useState({
		colA: [],
		colB: [],
		colC: [],
	});
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		getImages();
	}, []);

	const getImages = () => {
		let colA = [];
		let colB = [];
		let colC = [];
		return photoAPI
			.fetchPhotos(30)
			.then((result) => {
				result.forEach((image, i) => {
					let imageUrl = image.urls.regular;
					// console.log(imageUrl);
					if (i >= 0 && i <= 9) {
						colA.push({
							url: imageUrl,
							id: image.id,
                            downloadLink: image.urls.full,
                            color: image.color,
						});
					} else if (i >= 10 && i <= 19) {
                        colB.push({
                            url: imageUrl,
							id: image.id,
							downloadLink: image.urls.full,
                            color: image.color,
						});
					} else if (i >= 20 && i <= 29) {
                        colC.push({
                            url: imageUrl,
							id: image.id,
							downloadLink: image.urls.full,
                            color: image.color,
						});
					}
				});
			})
			.then(() => {
				setPhotos({
					colA: [...photos.colA, ...colA],
					colB: [...photos.colB, ...colB],
					colC: [...photos.colC, ...colC],
				});
			})
			.then(() => {
				setIsLoaded(true);
			});
    };
    
    const handleLoadMore = () => {
        let height = window.pageYOffset
        console.log(height)
        async function loadThenScroll() {
            await getImages()
            let scrollOptions = {
                top: height,
                left: 0,
            }
            window.scrollTo(scrollOptions)
        }
       loadThenScroll()
    }

	

	return (
		<div className={`body-wrapper body-wrapper--${props.theme}`} >
			<Controls
				theme={props.theme}
			/>
			{!isLoaded && <Spin size='large' delay={200} />}
			{isLoaded && (
				<Gallery
					photos={photos}
					theme={props.theme}
					getImages={getImages}
				/>
			)}
			<button className='styled-button secondary give-space' onClick={handleLoadMore}>Load More</button>
		</div>
	);
};

export default Wrapper;
