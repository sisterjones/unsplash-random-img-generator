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
      this.setImageCount = this.setImageCount.bind(this)
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

    setImageCount(e) {
        this.props.setImageCount(e)
    }


    
    render() {
        const settingsModal = (
            this.state.modalIsOpen && (
                <Modal>
                    <Settings 
                        closeModal={this.closeSettingsModal}
                        toggleTheme={this.props.toggleTheme}
                        theme={this.props.theme}
                        sliderValue={this.props.sliderValue}
                        setImageCount={this.setImageCount}
                    />
                </Modal>
            )
        )
        return (
            <header className={`header header--${this.props.theme}`}>
                <div className='header__header-inner'>
                    <Logo 
                        theme={this.props.theme}
                    />
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
