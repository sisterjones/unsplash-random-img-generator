import React, { Component } from 'react'
import './Settings.css'
// import { Slider, Switch } from 'antd'
import { 
    Slider,
    Radio
 } from 'antd';  
import 'antd/lib/slider/style/css'; 
import 'antd/lib/radio/style/css'; 

export default class Settings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggled: false,
        }
        this.closeModal = this.closeModal.bind(this)
        this.handleUiToggle = this.handleUiToggle.bind(this)
        this.toggleTheme = this.toggleTheme.bind(this)
        this.handleSliderChange = this.handleSliderChange.bind(this)
    }
    
    closeModal(e) {
        this.props.closeModal(e)
    }

    toggleTheme(e) {
        this.props.toggleTheme(e.target.value)
    }

    handleUiToggle() {
        this.setState({
            isToggled: !this.state.isToggled,
        })
    }

    handleSliderChange(newValue) {
        this.props.setImageCount(newValue)
    }
    
    render() {
        return (
            <div className={`settings settings--${this.props.theme}`}>
                <div className={`settings__container settings__container--${this.props.theme}`}>
                    <h2 className='settings__title'>Settings</h2>
                    <div className='options'>
                        <div className='options__image-count'>
                            <span className='options__option-label options__option-label--main'>Image Count</span>
                            <div className='options__option-interact'>
                                <label className='options__option-label options__option-label--note'>1</label>
                                <span className='options__image-count-slider'>
                                    <Slider
                                        min={1}
                                        max={100}
                                        value={this.props.sliderValue}
                                        onChange={this.handleSliderChange}
                                    />
                                </span>
                                <label className='options__option-label options__option-label--note'>100</label>
                            </div>
                        </div>
                        <div className='options__ui-theme'>
                            <span className='options__option-label options__option-label--main'>UI Theme</span>
                            <div className='options__option-interact'>
                                <span className='options__ui-toggle'>
                                    <Radio.Group defaultValue={this.props.theme} onChange={this.toggleTheme} className={`ui-toggle--${this.props.theme}`} buttonStyle="solid" size='large'>
                                        <Radio.Button size='large' className={`ui-toggle--${this.props.theme}`} value="light">Light</Radio.Button>
                                        <Radio.Button size='large' className={`ui-toggle--${this.props.theme}`} value="dark">Dark</Radio.Button>
                                    </Radio.Group>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <a className={`settings__close-x settings__action--${this.props.theme}`} onClick={this.closeModal}>+</a>
                <a className={`settings__ok settings__action--${this.props.theme}`} onClick={this.closeModal}>Ok</a>
            </div>
        )
    }
}
