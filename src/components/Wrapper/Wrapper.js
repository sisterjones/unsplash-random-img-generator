import React, { Component } from 'react'
import Controls from './../Controls/Controls'
import Gallery from './../Gallery/Gallery'
import * as photoAPI from '../../util/api'

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            imgNum: 0,
            query: '',
            limit: 20,
            frozenCount: 0,
            isLoaded: false,
            photosLoaded: false,
            imagesHeight: 0,
        }
        this.getImages = this.getImages.bind(this)
        this.getImagesWithQuery = this.getImagesWithQuery.bind(this)
        this.updateHeight = this.updateHeight.bind(this)
        this.newHeight = this.newHeight.bind(this)
        this.updateSearchSettings = this.updateSearchSettings.bind(this)
    }

    componentDidMount() {
        this.setState({
            isLoaded: true,
        })
        this.getImages()
    }

    updateSearchSettings(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    getImages() {
        let imageArray = []
        this.state.photos.forEach(image => {
            return image.isFrozen ?
            imageArray.push(image)
            : null
        })
        let trueCount = this.state.limit - imageArray.length
        photoAPI.fetchPhotos(null, trueCount).then((result) => {
            result.forEach(image => {
                let imageUrl = image.urls.regular
                imageArray.push({
                    url: imageUrl,
                    id: image.id,
                    downloadLink: image.urls.full,
                    isFrozen: false,    
                })
                console.log(imageUrl)
            })
        }).then(() => {
            this.setState({
                photos: imageArray,
                imgNum: imageArray.length,
                limit: 20,
            })
        }).then(() => {
            this.updateHeight()
        })
    }

    getImagesWithQuery() {
        let imageArray = []
        this.state.photos.forEach(image => {
            return image.isFrozen ?
            imageArray.push(image)
            : null
        })
        let trueCount = this.state.limit - imageArray.length || this.state.limit
        photoAPI.fetchPhotos(this.state.query, trueCount).then((result) => {
            result.forEach(image => {
                let imageUrl = image.urls.regular
                imageArray.push({
                    url: imageUrl,
                    id: image.id,
                    downloadLink: image.urls.full,
                    isFrozen: false,
                })
                console.log(imageUrl)
            })
        }).then(() => {
            this.setState({
                photos: imageArray,
                imgNum: imageArray.length,
            })
        }).then(() => {
            this.updateHeight()
        })
    }

    newHeight() {
        console.log('hi')
        let photos = this.state.photos
        let newImagesHeight = 0 
        if (photos.length) {
            photos.forEach(image => {
                let newHeight = document.getElementById(image.id).height 
                newImagesHeight += newHeight
                console.log(newImagesHeight)
            })
        }
        this.setState({
            imagesHeight: newImagesHeight,
        })
    }

    updateHeight() {
        setTimeout(this.newHeight, 900)
    }

    freezeImage(updatedImageState) {
        this.setState({
            photos: updatedImageState,
        })
    }

    
    render() {
        return (
            <div>
                <Controls 
                    updateSearchSettings={this.updateSearchSettings}
                    getImagesWithQuery={this.getImagesWithQuery}
                    getImages={this.getImages}
                    query={this.state.query}
                    limit={this.state.limit}
                    updateHeight={this.updateHeight}
                />
                <Gallery 
                    photos={this.state.photos}
                    updateHeight={this.updateHeight}
                    freezeImage={this.freezeImage}
                    imagesHeight={this.state.imagesHeight}
                />
            </div>
        )
    }
}
