import React, { Component } from 'react'
import './Settings.css'
// import { Slider, Switch } from 'antd'
import { 
    Slider,
    Switch
 } from 'antd';  
import 'antd/lib/slider/style/css'; 
import 'antd/lib/switch/style/css'; 

export default class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggled: false,
        }
        this.closeModal = this.closeModal.bind(this)
        this.handleUiToggle = this.handleUiToggle.bind(this)
    }
    
    closeModal(e) {
        this.props.closeModal(e)
    }

    handleUiToggle() {
        this.setState({
            isToggled: !this.state.isToggled
        })
    }
    
    render() {
        const steps={
            1: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
            60: '60',
            70: '70',
            80: '80',
            90: '90',
            100: '100'
        }
        return (
            <div className='settings'>
                <div className='settings__container'>
                    <h2 className='settings__title'>Settings</h2>
                    <div className='options'>
                        <div className='options__image-count'>
                            <span className='options__option-label options__option-label--main'>Image Count</span>
                            <label className='options__option-label options__option-label--note'>1</label>
                            <span className='options__image-count-slider'>
                                <Slider
                                    min={1}
                                    max={100}
                                    defaultValue={30}
                                />
                            </span>
                            <label className='options__option-label options__option-label--note'>100</label>
                        </div>
                        <div className='options__ui-theme'>
                            <span className='options__option-label options__option-label--main'>UI Theme</span>
                            <label className='options__option-label options__option-label--note'>Light</label>
                            <span className='options__ui-toggle'>
                                <Switch size="small" onChange={this.handleUiToggle} checked={this.state.isToggled} />
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
