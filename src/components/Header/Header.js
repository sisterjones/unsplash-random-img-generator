import React, { Component } from 'react'
import './Header.css'
import Logo from './../Logo/Logo'
import Modal from './../../util/portal' 
import Settings from './../Settings/Settings'

export default class Header extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         modalIsOpen: false,
      }
      this.openSettingsModal = this.openSettingsModal.bind(this)
      this.closeSettingsModal = this.closeSettingsModal.bind(this)
    }

    openSettingsModal() {
        this.setState({
            modalIsOpen: true,
        })
    }

    closeSettingsModal(e) {
        this.setState({
            modalIsOpen: false,
        })
    }


    
    render() {
        const settingsModal = (
            this.state.modalIsOpen && (
                <Modal>
                    <Settings 
                        closeModal={this.closeSettingsModal}
                    />
                </Modal>
            )
        )
        return (
            <header className='header'>
                <div className='header__header-inner'>
                    <Logo />
                    <h1 className='header__header-title'>
                        Random Image Generator
                    </h1>
                    <h6 onClick={this.openSettingsModal} className='header__settings-button'>Settings</h6>
                </div>
                {settingsModal}
            </header>
        )
    }
}
