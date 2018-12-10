import React from 'react'
import Image from './../Image/Image'
import './Gallery.css'

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            imgNum: 0,
            query: '',
            frozenCount: 0,
        }
        this.updateHeight = this.updateHeight.bind(this)
        this.freezeImage = this.freezeImage.bind(this)
        this.mapImages = this.mapImages.bind(this)
    }

    componentDidMount() {
        setTimeout(this.updateHeight, 700)
    }


    updateHeight() {
        setTimeout(this.props.updateHeight, 900)
    }

    freezeImage(e) {
        let updatedImageState = this.props.photos 
        let imgIndex = updatedImageState.map(img => {return img.id}).indexOf(e.target.id)
        let imgToUpdate = updatedImageState[imgIndex]
        imgToUpdate.isFrozen = !imgToUpdate.isFrozen 
        this.props.freezeImage(updatedImageState)
    }

    mapImages() {
        if (this.props.photos !== []) {
        let photoSet = this.props.photos.map((image) => (
                <Image 
                    imageSource={image.url} 
                    altTag='randomly generated from Unsplash.com'
                    id={image.id}
                />
        ))
        return photoSet
        } else {
            return
        }
    }

    render() {

        let galleryStyle = {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            width: '100vw',
            height: this.props.imagesHeight / 2.6,
            lineHeight: '0',
            columnGap: '0',
        }

        return (
            <div className='gallery-container'>
                <div id='gallery' style={galleryStyle} className='image-gallery'>
                    {this.mapImages()}
                </div>
                
            </div>
        )
    }
    }

export default Gallery