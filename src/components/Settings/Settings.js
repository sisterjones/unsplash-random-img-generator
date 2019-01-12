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
        <p onClick={this.closeModal}>test</p>
      </div>
    )
  }
}
