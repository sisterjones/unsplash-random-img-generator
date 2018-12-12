import React, { Component } from 'react'
import Controls from './../Controls/Controls'
import Gallery from './../Gallery/Gallery'
import * as photoAPI from '../../util/api'
import uuidv4 from 'uuid/v4'
import './Wrapper.css'

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
            tags: [],
        }
        this.getImages = this.getImages.bind(this)
        this.getImagesWithQuery = this.getImagesWithQuery.bind(this)
        this.updateHeight = this.updateHeight.bind(this)
        this.newHeight = this.newHeight.bind(this)
        this.updateSearchSettings = this.updateSearchSettings.bind(this)
        this.handleAddKeyword = this.handleAddKeyword.bind(this)
        this.removeTag = this.removeTag.bind(this)
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
                tags: []
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
        let newQuery = ''
        this.state.tags.forEach(tag => {
            newQuery = `${newQuery} ${tag.value}`
        })
        this.setState({
            query: newQuery,
        })
        let trueCount = this.state.limit - imageArray.length || this.state.limit
        photoAPI.fetchPhotos(newQuery, trueCount).then((result) => {
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

    handleAddKeyword(e, newTag) {
        let newId = uuidv4()
        let updateTags = this.state.tags
        updateTags.push({
            value: newTag,
            id: newId,
        })
        this.setState({
            tags: updateTags,
        })
    }

    removeTag(e) {
        let newTags = this.state.tags
        let removalIndex = newTags.map(tag => {return tag.id}).indexOf(e.target.id)
        newTags.splice(removalIndex, 1)
        this.setState({
            tags: newTags,
        })
    }

    
    render() {
        return (
            <div class='body-content-wrapper'>
                <Controls 
                    updateSearchSettings={this.updateSearchSettings}
                    getImagesWithQuery={this.getImagesWithQuery}
                    getImages={this.getImages}
                    query={this.state.query}
                    limit={this.state.limit}
                    updateHeight={this.updateHeight}
                    handleAddKeyword={this.handleAddKeyword}
                    tags={this.state.tags}
                    removeTag={this.removeTag}
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
