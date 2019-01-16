import React, { Component } from 'react'
import Controls from './../Controls/Controls'
import Gallery from './../Gallery/Gallery'
import * as photoAPI from '../../util/api'
import { Spin } from 'antd'
import 'antd/lib/spin/style/css'; 
import uuidv4 from 'uuid/v4'
import './Wrapper.css'

export default class Wrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            imgNum: 0,
            isLoaded: false,
            imagesHeight: 0,
        }
        this.getImages = this.getImages.bind(this)
        this.updateHeight = this.updateHeight.bind(this)
        this.newHeight = this.newHeight.bind(this)
        this.updateHeightSecondary = this.updateHeightSecondary.bind(this)
    }

    componentDidMount() {
        this.getImages()
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
                let imgHeight = newHeight + 8
                newImagesHeight += imgHeight
                console.log(newImagesHeight)
            })
        }
        this.setState({
            imagesHeight: newImagesHeight,
        })
    }

    updateHeight() {
        setTimeout(this.newHeight, 1300)
    }

    updateHeightSecondary() {
        setTimeout(this.newHeight, 2000)
    }

  

    
    render() {
        return (
            <div class={`body-wrapper body-wrapper--${this.props.theme}`}>
                <Controls 
                    getImages={this.getImages}
                    updateHeight={this.updateHeight}
                    theme={this.props.theme}
                />
                {!this.state.isLoaded &&
                    <Spin size='large' delay={200}/>
                }
                {this.state.isLoaded &&
                <Gallery 
                    photos={this.state.photos}
                    updateHeight={this.updateHeight}
                    imagesHeight={this.state.imagesHeight}
                    theme={this.props.theme}
                />
                }
            </div>
        )
    }
}
