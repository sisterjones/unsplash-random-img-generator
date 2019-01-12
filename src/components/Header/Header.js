import React, { Component } from 'react'
import './Header.css'
import Logo from './../Logo/Logo'

export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         modalIsOpen: false,
      }
      this.openSettingsModal = this.openSettingsModal.bind(this)
    }

    openSettingsModal() {
        this.setState({
            modalIsOpen: true,
        })
    }
    
    render() {
        return (
            <header className='header'>
                <div className='header__header-inner'>
                    <Logo />
                    <h1 className='header__header-title'>
                        Random Image Generator
                    </h1>
                    <h6 onClick={this.openSettingsModal} className='header__settings-button'>Settings</h6>
                </div>
            </header>
        )
    }
}
