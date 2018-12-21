import React, { Component } from 'react'
import './Header.css'
import Logo from './../Logo/Logo'

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__header-inner'>
                    <Logo />
                    <h1 className='header__header-title'>
                        Random Image Generator
                    </h1>
                </div>
            </header>
        )
    }
}
