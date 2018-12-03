import React, { Component } from 'react'
import * as photoAPI from './../util/api'

export default class Wrapper extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         photos: [],
        imgNum: 0,
        query: '',
        limit: 5,
        frozenCount: 0,
      }

      this.getImages = this.getImages.bind(this)
      this.mapImages = this.mapImages.bind(this)
      this.updateSearchSettings = this.updateSearchSettings.bind(this)
      this.submitSearch = this.submitSearch.bind(this)
      this.getImagesWithQuery = this.getImagesWithQuery.bind(this)
      this.freezeImage = this.freezeImage.bind(this)

      this.imageStyle = {
        height: `18vh`,
        width: 'auto',
      }

      this.frozenImageStyle = {
        border: '3px solid blue',
      }

    }
    
    componentDidMount() {
        this.getImages()
    }

    updateSearchSettings(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    freezeImage(e) {
        console.log(e.target)
        let updatedImageState = this.state.photos 
        let imgIndex = updatedImageState.map(img => {return img.id}).indexOf(e.target.id)
        let imgToUpdate = updatedImageState[imgIndex]
        console.log(imgToUpdate)
        imgToUpdate.isFrozen = !imgToUpdate.isFrozen 
        this.setState({
            photos: updatedImageState,
        })
    }

    submitSearch() {
        this.getImagesWithQuery()
    }

    getImagesWithQuery() {
        let query = this.state.query
        let limit = this.state.limit
        let imageArray = []
        this.state.photos.forEach(image => {
            return image.isFrozen ?
            imageArray.push(image)
            : null
        })
        let trueCount = limit - imageArray.length || limit
        photoAPI.fetchPhotos(query, trueCount).then((result) => {
            result.forEach(image => {
                let imageUrl = image.urls.regular
                imageArray.push({
                    url: imageUrl,
                    id: image.id,
                    isFrozen: false,
                })
                console.log(imageUrl)
            })
        }).then(() => {
            this.setState({
                photos: imageArray,
                imgNum: imageArray.length,
            })
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
                    isFrozen: false,    
                })
                console.log(imageUrl)
            })
        }).then(() => {
            this.setState({
                photos: imageArray,
                imgNum: imageArray.length,
                limit: 5,
            })
        })
    }

    mapImages() {
        if (this.state.photos !== []) {
        let photoSet = this.state.photos.map((image, index) => (
            <div
            key={`${image.id}-${index}`}
            style={image.isFrozen ? this.frozenImageStyle : null}
            >
                <img id={image.id}
            onClick={this.freezeImage} style={this.imageStyle} src={image.url} alt='random from unsplash'/>
            </div>
        ))
        return photoSet
        } else {
            return
        }
    }

    render() {
        return (
            <div>
                <div className='image-wrapper'>
                    {this.mapImages()}
                </div>
                <div className='refresh-button'>
                    <button onClick={this.getImages}>5 Random Images</button>
                </div>
                <div className='search bar'>
                    <input value={this.state.query} onChange={this.updateSearchSettings} type='text' name='query' />
                    <input value={this.state.limit} onChange={this.updateSearchSettings} type='number' max='30' min='0' name='limit' />
                    <button onClick={this.submitSearch}>{this.state.limit} Random Images with Keyword {this.state.query}</button>
                </div>
            </div>
        )
    }
}
