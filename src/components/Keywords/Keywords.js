import React, { Component } from 'react'
import Tag from './../Tag/Tag'
import './Keywords.css'


export default class Keywords extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            inputValue: '',
        }
        this.handleInputValueChange = this.handleInputValueChange.bind(this)
        this.handleAddKeyword = this.handleAddKeyword.bind(this)
        this.mapTags = this.mapTags.bind(this)
        this.removeTag = this.removeTag.bind(this)
    }

    handleInputValueChange(e) {
        this.setState({
            inputValue: [e.target.value]
        })
    }

    handleAddKeyword(e) {

        let newTag = this.state.inputValue

        if (e.which === 13) {
            console.log('hi')
            this.props.handleAddKeyword(e, newTag)
            this.setState({
                inputValue: '',
            })
        }
    }

    removeTag(e) {
        this.props.removeTag(e)
    }

    mapTags() {
        let mappedTags = this.props.tags.map((tag, index) => (
            <div className='mapped-tag' key={`tag-at-index-${index}`}>
                <Tag 
                    value={tag.value} 
                    tagId={tag.id} 
                    removeTag={this.removeTag}   
                />
            </div>
        ))
        return mappedTags
    }
    
    render() {
        return (
            <div className='keyword-container'>
            <label for='keyword-input'>Keywords </label>
            <div className='input-and-tag'>
                <div className='input-container --input'>
                    <input className='--input' value={this.state.inputValue} onChange={this.handleInputValueChange} onKeyDown={this.handleAddKeyword} type='text' name='keyword-input' />
                </div>
                <div className='tag-wrapper'>
                    {this.mapTags()}
                </div>
                </div>
            </div>
        )
    }
}
