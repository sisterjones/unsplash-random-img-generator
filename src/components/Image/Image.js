import React from 'react'
import './Image.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleDown, faLink, faCheck } from '@fortawesome/free-solid-svg-icons'
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
        document.getElementById(iconId).classList.add('rotate')
    }


    render() {

        const hoverContents = this.state.isHovered ? 
            <div className='hover-contents'>
                <div className='hover-icon'>
                    <div className={this.state.imageAnimation ? '--check' : '--download'} onClick={this.state.imageAnimation ? null : this.setRotateClass} target='_blank' rel='noopener noreferrer' download>
                        {this.state.imageAnimation ?
                            <FontAwesomeIcon icon={faCheck} class='--check --icon' />
                            :
                            <div>
                                <FontAwesomeIcon icon={faArrowAltCircleDown} id={`dl-icon-${this.props.id}`} onClick={this.forceDownload} class='--dwn --icon' />
                                <span className='overlay-tooltip'>Click to Download</span>
                            </div>
                        }
                    </div>
                </div>
                <div className='hover-icon'>
                    <a className='--sourcelink' href={this.props.imageSource} target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLink} class='--srcli --icon' />
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
                <div className='indiv-image'>
                    <img 
                        src={this.props.imageSource} 
                        alt={this.props.altTag}
                        id={this.props.id}
                        className='mapped-image'
                    />
                </div>
                {hoverContents}
            </div>
        )
    }
    
}

export default Image