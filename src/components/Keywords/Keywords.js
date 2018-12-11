import React, { Component } from 'react'
import Tag from './../Tag/Tag'
import uuidv4 from 'uuid/v4'

export default class Keywords extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            tags: [],
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

        let newId = uuidv4()
        let updateTags = this.state.tags
        let newTag = this.state.inputValue

        if (e.which === 13) {
            updateTags.push({
                value: newTag,
                id: newId,
            })
            this.setState({
                tags: updateTags,
                inputValue: '',
            })
        }
    }

    removeTag(e) {
        let currentTags = this.state.tags
        let removalIndex = currentTags.map(tag => {return tag.id}).indexOf(e.target.id)
        currentTags.splice(removalIndex, 1)
        this.setState({
            tags: currentTags,
        })
    }

    mapTags() {
        let mappedTags = this.state.tags.map((tag, index) => (
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
                <div className='input-container --input'>
                    <input className='--input' value={this.state.inputValue} onChange={this.handleInputValueChange} onKeyDown={this.handleAddKeyword} type='text' name='keyword-input' />
                </div>
                <div className='tag-container'>
                    {this.mapTags()}
                </div>
            </div>
        )
    }
}
