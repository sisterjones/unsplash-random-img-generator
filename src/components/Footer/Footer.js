import React, { Component } from 'react'
import './Footer.css'
import Logo from './../Logo/Logo'

const Footer = (props) =>  {

    // const updateHeight = () => {
    //     props.updateHeight()
    // }

    const toTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

        return (
            <footer className={`footer footer--${props.theme}`}>
                <div className={`footer__top`}>
                    <span className={`footer__copyright`}>&copy; <a href='https://github.com/sisterjones' target='_blank' rel='noreferrer' className={`footer__copyright footer__copyright--link`}>sister_jones</a> 2019</span>
                    <a className={`footer__back-to-top`} onClick={toTop}>Back to Top</a>
                    <a className={`footer__reset-grid`}>Reset Grid</a>
                </div>
                <div className={`footer__bottom`}>
                    <div className={`footer__logo`}>
                        <Logo 
                            theme={props.theme}
                        />
                    </div>
                    <p className={`footer__attribution`}>All images are available here thanks to the wonderful people at <a href="https://unsplash.com" target='_blank' rel='noreferrer' className={`footer__attribution footer__attribution--link`}>Unsplash</a> and their fantastic API. If you want curated sets of images, are looking to search by keyword, tag, author, etc., or want to support the talented photographers behind every one of these photos; head over to <a href="https://unsplash.com" target='_blank' rel='noreferrer' className={`footer__attribution footer__attribution--link`}>Unsplash.com</a>. Also note that I have no affiliation with Unsplash, their API, or any of their images.</p>
                </div>
            </footer>
        )
}

export default Footer
