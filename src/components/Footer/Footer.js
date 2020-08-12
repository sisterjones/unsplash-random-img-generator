import React, { Component } from 'react';
import './Footer.css';
import Logo from './../Logo/Logo';

const Footer = (props) => {
	// const updateHeight = () => {
	//     props.updateHeight()
	// }

	const toTop = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<footer className={`footer footer--${props.theme}`}>
			<div className={`footer__top`}>
				<p
					className={`footer__back-to-top footer__back-to-top--${
						props.theme
					}`}
					onClick={toTop}
				>
					Back to Top
				</p>
				{/* <a className={`footer__reset-grid footer__reset-grid--${props.theme}`}>Reset Grid</a> */}
			</div>
			<hr className={`footer__rule footer__rule--${props.theme}`} />
			<div className={`footer__bottom`}>
				<span
					className={`footer__copyright footer__copyright--${
						props.theme
					}`}
				>
					&copy;{' '}
					<a
						href='https://github.com/sisterjones'
						target='_blank'
						rel='noreferrer'
						className={`footer__copyright footer__copyright--link footer__copyright--link--${
							props.theme
						}`}
					>
						sisterjones
					</a>{' '}
					2019
				</span>
				<div className={`footer__logo`}>
					<Logo theme={props.theme} />
				</div>
				<p
					className={`footer__attribution footer__attribution--${
						props.theme
					}`}
				>
					All images are available here thanks to the wonderful people
					at{' '}
					<a
						href='https://unsplash.com'
						target='_blank'
						rel='noreferrer'
						className={`footer__attribution footer__attribution--link footer__attribution--link--${
							props.theme
						}`}
					>
						Unsplash
					</a>{' '}
					and their fantastic API. If you want curated sets of images,
					are looking to search by keyword, tag, author, etc., or want
					to support the talented photographers behind every one of
					these photos; head over to{' '}
					<a
						href='https://unsplash.com'
						target='_blank'
						rel='noreferrer'
						className={`footer__attribution footer__attribution--link footer__attribution--link--${
							props.theme
						}`}
					>
						Unsplash.com
					</a>
					. Also note that I have no affiliation with Unsplash, their
					API, or any of their images.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
