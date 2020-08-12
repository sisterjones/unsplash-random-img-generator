import React, { forwardRef, useState } from 'react';
import './Image.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faArrowCircleDown,
	faLink,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';
import * as photoAPI from '../../util/api';

const Image = forwardRef((props, ref) => {
	const [isHovered, setIsHovered] = useState(false);
	const [imageAnimation, setImageAnimation] = useState(false);
	const [rotate, setRotate] = useState(false);

	const handleHoverStart = () => {
		setIsHovered(true);
	};

	const handleHoverEnd = () => {
		setIsHovered(false);
	};

	const updateIcon = () => {
		setImageAnimation(true);
	};

	const forceDownload = () => {
		setRotate(true);
		setTimeout(updateIcon(), 1200);
		let url = props.downloadLink;
		let filename = `img-unsplash-${props.id}`;
		let location = window.location.origin;
		photoAPI.downloadResource(url, filename, location);
	};

	const setRotateClass = () => {
		let iconId = `dl-icon-${props.id}`;
		document
			.getElementById(iconId)
			.classList.add('hover-content__icon--rotate');
	};

	const hoverContents = isHovered ? (
		<div className='hover-content'>
			<div
				className='hover-content__icon-wrapper'
				onClick={imageAnimation ? null : setRotateClass}
				target='_blank'
				rel='noopener noreferrer'
				download
			>
				{imageAnimation ? (
					<FontAwesomeIcon
						icon={faCheck}
						class='hover-content__icon hover-content__icon--check'
					/>
				) : (
					<FontAwesomeIcon
						icon={faArrowCircleDown}
						id={`dl-icon-${props.id}`}
						onClick={forceDownload}
						class='hover-content__icon hover-content__icon--download hover-content__icon--hover'
					/>
				)}
			</div>
			<div className='hover-content__icon-wrapper'>
				<a
					className='hover-content__icon-link hover-content__icon-link--source'
					href={props.imageSource}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FontAwesomeIcon
						icon={faLink}
						class='hover-content__icon hover-content__icon--source hover-content__icon--hover'
					/>
				</a>
			</div>
		</div>
	) : null;

	return (
		<div
			className='image-container'
			onMouseEnter={handleHoverStart}
			onMouseLeave={handleHoverEnd}
		>
			<div className='image-container__image-wrapper'>
				<img
					src={props.imageSource}
					alt={props.altTag}
					id={props.id}
					className='image-container__image'
					ref={ref}
				/>
			</div>
			{hoverContents}
		</div>
	);
});

export default Image;
