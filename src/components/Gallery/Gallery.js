import React, {useState, useEffect} from 'react'
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
        this.mapColumnA = this.mapColumnA.bind(this)
        this.mapColumnB = this.mapColumnB.bind(this)
        this.mapColumnC = this.mapColumnC.bind(this)
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

    mapColumnA() {
        if (this.props.photos !== []) {

            let portionLength = this.props.photos.length / 3

            let startPoint = 0

            let endPoint = portionLength

            let colA = this.props.photos.slice(startPoint, endPoint)

            let photoSet = colA.map((image) => (
                <Image 
                    imageSource={image.url} 
                    altTag='randomly generated from Unsplash.com'
                    id={image.id}
                    downloadLink={image.downloadLink}
                    key={`img-${image.id}`}
                />
        ))
        return photoSet
        } else {
            return
        }
    }

    mapColumnB() {
        if (this.props.photos !== []) {

            let portionLength = this.props.photos.length / 3

            let startPoint = portionLength

            let endPoint = portionLength * 2

            let colB = this.props.photos.slice(startPoint, endPoint)

            let photoSet = colB.map((image) => (
                <Image 
                    imageSource={image.url} 
                    altTag='randomly generated from Unsplash.com'
                    id={image.id}
                    downloadLink={image.downloadLink}
                    key={`img-${image.id}`}
                />
        ))
        return photoSet
        } else {
            return
        }
    }

    mapColumnC() {
        if (this.props.photos !== []) {

            let portionLength = this.props.photos.length / 3

            let startPoint = portionLength * 2

            let endPoint = portionLength * 3

            let colC = this.props.photos.slice(startPoint, endPoint)

            let photoSet = colC.map((image) => (
                <Image 
                    imageSource={image.url} 
                    altTag='randomly generated from Unsplash.com'
                    id={image.id}
                    downloadLink={image.downloadLink}
                    key={`img-${image.id}`}
                />
        ))
        return photoSet
        } else {
            return
        }
    }

    render() {

        // let x = 2.7

        // let columnHeight = {
        //     minHeight: window.innerWidth > 600 ? this.props.imagesHeight / 3 : this.props.imageHeight + 500,
        //     maxHeight: window.innerWidth > 600 ? this.props.imagesHeight / 2.4 : this.props.imageHeight + 500,
        // }

        return (
            <div className={`gallery gallery---${this.props.theme}`}>
                <div id='gallery' className='gallery__wrapping-column'>
                    <div className='gallery__image-column gallery__image-column--left'>
                        {this.mapColumnA()}
                    </div>
                    <div className='gallery__image-column gallery__image-column--center'>
                        {this.mapColumnB()}
                    </div>
                    <div className='gallery__image-column gallery__image-column--right'>
                        {this.mapColumnC()}
                    </div>
                </div>
                
            </div>
        )
    }
    }

export default Gallery