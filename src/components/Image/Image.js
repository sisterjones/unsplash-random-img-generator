import React from 'react'
import './Image.css'

class Image extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isHovered: false,
        }
        this.handleHoverStart = this.handleHoverStart.bind(this)
        this.handleHoverEnd = this.handleHoverEnd.bind(this)
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


    render() {

        const hoverContents = this.state.isHovered ? 
            <div className='hover-contents'>
                <div className='hover-icon --download'>
                    D
                </div>
                <div className='hover-icon --sourcelink'>
                    <a className='--sourcelink' href={this.props.imageSource} target='_blank' rel='noopener noreferrer'>
                        Source
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