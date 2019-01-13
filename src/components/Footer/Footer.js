import React, { Component } from 'react'
import './Footer.css'

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
                I am the footer
                <a onClick={toTop}>Back to Top</a>
            </footer>
        )
}

export default Footer
