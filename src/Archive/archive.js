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
            isLoaded: false,
            photosLoaded: false,
            imagesHeight: 0,
        }
        this.getImages = this.getImages.bind(this)
        this.updateHeight = this.updateHeight.bind(this)
        this.newHeight = this.newHeight.bind(this)
        this.updateSearchSettings = this.updateSearchSettings.bind(this)
        this.handleAddKeyword = this.handleAddKeyword.bind(this)
        this.removeTag = this.removeTag.bind(this)
        this.decrementCounter = this.decrementCounter.bind(this)
        this.incrementCounter = this.incrementCounter.bind(this)
        this.updateHeightSecondary = this.updateHeightSecondary.bind(this)
    }

    componentDidMount() {
        this.getImages()
    }

    updateSearchSettings(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    getImages() {
        this.setState({
            isLoaded: false
        })
        let imageArray = []
        let imageCount = this.props.imageCount

        if (imageCount <= 30) {
            photoAPI.fetchPhotos(imageCount).then((result) => {
                result.forEach(image => {
                    let imageUrl = image.urls.regular
                    imageArray.push({
                        url: imageUrl,
                        id: image.id,
                        downloadLink: image.urls.full,
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
            }).then(() => {
                this.setState({
                    isLoaded: true
                })
            })
        } else if (imageCount > 30 ) {
            let a = 30
            let b = imageCount - 30
            let c = imageCount - 60
            let d = imageCount - 90
            if (imageCount <= 60) {
                photoAPI.fetchPhotos(a).then((result) => {
                    result.forEach(image => {
                        let imageUrl = image.urls.regular
                        imageArray.push({
                            url: imageUrl,
                            id: image.id,
                            downloadLink: image.urls.full,
                        })
                        console.log(imageUrl)
                    })
                }).then(() => {
                    photoAPI.fetchPhotos(b).then((result) => {
                        result.forEach(image => {
                            let imageUrl = image.urls.regular
                            imageArray.push({
                                url: imageUrl,
                                id: image.id,
                                downloadLink: image.urls.full,
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
                }).then(() => {
                    this.setState({
                        isLoaded: true
                    })
                })
            })
            } else if (imageCount > 60 && imageCount <= 90) {
                photoAPI.fetchPhotos(a).then((result) => {
                    result.forEach(image => {
                        let imageUrl = image.urls.regular
                        imageArray.push({
                            url: imageUrl,
                            id: image.id,
                            downloadLink: image.urls.full,
                        })
                        console.log(imageUrl)
                    })
                }).then(() => {
                    photoAPI.fetchPhotos(b).then((result) => {
                        result.forEach(image => {
                            let imageUrl = image.urls.regular
                            imageArray.push({
                                url: imageUrl,
                                id: image.id,
                                downloadLink: image.urls.full,
                            })
                            console.log(imageUrl)
                        })
            }).then(() => {
                    photoAPI.fetchPhotos(c).then((result) => {
                        result.forEach(image => {
                            let imageUrl = image.urls.regular
                            imageArray.push({
                                url: imageUrl,
                                id: image.id,
                                downloadLink: image.urls.full,
                            })
                            console.log(imageUrl)
                        })
                }).then(() => {
                    this.setState({
                        photos: imageArray,
                        imgNum: imageArray.length,
                    })
                }).then(() => {
                    this.updateHeightSecondary()
                }).then(() => {
                    this.setState({
                        isLoaded: true
                    })
                })
            })
        })

        } else if (imageCount > 90) {
            photoAPI.fetchPhotos(a).then((result) => {
                result.forEach(image => {
                    let imageUrl = image.urls.regular
                    imageArray.push({
                        url: imageUrl,
                        id: image.id,
                        downloadLink: image.urls.full,
                    })
                    console.log(imageUrl)
                })
            }).then(() => {
                photoAPI.fetchPhotos(b).then((result) => {
                    result.forEach(image => {
                        let imageUrl = image.urls.regular
                        imageArray.push({
                            url: imageUrl,
                            id: image.id,
                            downloadLink: image.urls.full,
                        })
                        console.log(imageUrl)
                    })
        }).then(() => {
                photoAPI.fetchPhotos(a).then((result) => {
                    result.forEach(image => {
                        let imageUrl = image.urls.regular
                        imageArray.push({
                            url: imageUrl,
                            id: image.id,
                            downloadLink: image.urls.full,
                        })
                        console.log(imageUrl)
                    })
            }).then(() => {
                photoAPI.fetchPhotos(d).then((result) => {
                    result.forEach(image => {
                        let imageUrl = image.urls.regular
                        imageArray.push({
                            url: imageUrl,
                            id: image.id,
                            downloadLink: image.urls.full,
                        })
                        console.log(imageUrl)
                    })
            }).then(() => {
                this.setState({
                    photos: imageArray,
                    imgNum: imageArray.length,
                })
            }).then(() => {
                this.updateHeightSecondary()
            }).then(() => {
                this.setState({
                    isLoaded: true
                })
            })
        })
    }) })
            }
        }
    }


    newHeight() {
        console.log('hi')
        let photos = this.state.photos
        let newImagesHeight = 0 
        if (this.state.isLoaded) {
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

    updateHeightSecondary() {
        setTimeout(this.newHeight, 2000)
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

    removeTag(tagId) {
        console.log(tagId)
        let newTags = this.state.tags
        let removalIndex = newTags.map(tag => {return tag.id}).indexOf(tagId)
        newTags.splice(removalIndex, 1)
        this.setState({
            tags: newTags,
        })
    }

    incrementCounter(e) {
        let counterValue = this.state.limit 
        counterValue += 1
        this.setState({
            limit: counterValue,
        })
    }

    decrementCounter(e) {
        let counterValue = this.state.limit 
        counterValue -= 1
        this.setState({
            limit: counterValue,
        })
    }

    
    render() {
        return (
            <div class={`body-wrapper body-wrapper--${this.props.theme}`}>
                <Controls 
                    updateSearchSettings={this.updateSearchSettings}
                    getImages={this.getImages}
                    query={this.state.query}
                    limit={this.state.limit}
                    updateHeight={this.updateHeight}
                    handleAddKeyword={this.handleAddKeyword}
                    tags={this.state.tags}
                    removeTag={this.removeTag}
                    decrementCounter={this.decrementCounter}
                    incrementCounter={this.incrementCounter}
                    theme={this.props.theme}
                />
                <Gallery 
                    photos={this.state.photos}
                    updateHeight={this.updateHeight}
                    freezeImage={this.freezeImage}
                    imagesHeight={this.state.imagesHeight}
                    theme={this.props.theme}
                />
            </div>
        )
    }
}

