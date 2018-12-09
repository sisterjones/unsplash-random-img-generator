import React, { Component } from 'react'
import './Header.css'
import Logo from './../Logo/Logo'

export default class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className ='header-inner'>
                    <Logo />
                    <h1 className='header-title --large'>
                        Random Image Generator
                    </h1>
                    <p 
                        className='header-title --small'
                        onClick={null}
                    >
                        About
                    </p>
                </div>
            </div>
        )
    }
}
