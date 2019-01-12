import React, { Component } from 'react'
import './Settings.css'

export default class Settings extends Component {
    constructor(props) {
        super(props)
        this.closeModal = this.closeModal.bind(this)
    }
    
    closeModal(e) {
        this.props.closeModal(e)
    }
    
    render() {
        return (
            <div className='settings'>
                <div className='settings__container'>
                    <h2 className='settings__title'>Settings</h2>
                    <div className='options'>
                        <div className='options__image-count'>
                            <span className='options__option-label options__option-label--main'>Image Count</span>
                            <label className='options__option-label options__option-label--note'>1</label>
                            <span className='options__image-count-slider'>
                                PUT SLIDER HERE
                            </span>
                            <label className='options__option-label options__option-label--note'>100</label>
                        </div>
                        <div className='options__ui-theme'>
                            <span className='options__option-label options__option-label--main'>UI Theme</span>
                            <label className='options__option-label options__option-label--note'>Light</label>
                            <span className='options__ui-toggle'>
                                PUT TOGGLE HERE
                            </span>
                            <label className='options__option-label options__option-label--note'>Dark</label>
                        </div>
                    </div>
                </div>
                <a className='settings__close-x' onClick={this.closeModal}>+</a>
            </div>
        )
    }
}
