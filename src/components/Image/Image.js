import React from 'react'
import './Image.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faLink, faCheck } from '@fortawesome/free-solid-svg-icons'
import * as photoAPI from '../../util/api'

class Image extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isHovered: false,
            imageAnimation: false,
            rotate: false,
        }
        this.handleHoverStart = this.handleHoverStart.bind(this)
        this.handleHoverEnd = this.handleHoverEnd.bind(this)
        this.forceDownload = this.forceDownload.bind(this)
        this.setRotateClass = this.setRotateClass.bind(this)
        this.updateIcon = this.updateIcon.bind(this)
    }

    handleHoverStart() {
        this.setState({
            isHovered: true,
        })
    }

    handleHoverEnd() {
        this.setState({
            isHovered: false,
        })
    }

    updateIcon() {
        this.setState({
            imageAnimation: true,
        })
    }

    forceDownload() {
        this.setState({
            rotate: true,
        })
        setTimeout(this.updateIcon, 1200)
        let url = this.props.downloadLink
        let filename = `img-unsplash-${this.props.id}`
        let location = window.location.origin
        photoAPI.downloadResource(url, filename, location)
        console.log(this.state.imageAnimation)
    }

    setRotateClass() {
        let iconId = `dl-icon-${this.props.id}`
        document.getElementById(iconId).classList.add('hover-content__icon--rotate')
    }


    render() {

        const hoverContents = this.state.isHovered ? 
            <div className='hover-content'>
                <div className='hover-content__icon-wrapper' onClick={this.state.imageAnimation ? null : this.setRotateClass} target='_blank' rel='noopener noreferrer' download>
                    {this.state.imageAnimation ?
                        <FontAwesomeIcon icon={faCheck} class='hover-content__icon hover-content__icon--check' />
                        :
                        <FontAwesomeIcon icon={faArrowCircleDown} id={`dl-icon-${this.props.id}`} onClick={this.forceDownload} class='hover-content__icon hover-content__icon--download hover-content__icon--hover' />
                    }
                </div>
                <div className='hover-content__icon-wrapper'>
                    <a className='hover-content__icon-link hover-content__icon-link--source' href={this.props.imageSource} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLink} class='hover-content__icon hover-content__icon--source hover-content__icon--hover' />
                    </a>
                </div>
            </div>
        : null


        return (
            <div 
                className='image-container'
                onMouseEnter={this.handleHoverStart}
                onMouseLeave={this.handleHoverEnd}
            >
                <div className='image-container__image-wrapper'>
                    <img 
                        src={this.props.imageSource} 
                        alt={this.props.altTag}
                        id={this.props.id}
                        className='image-container__image'
                    />
                </div>
                {hoverContents}
            </div>
        )
    }
    
}

export default Image