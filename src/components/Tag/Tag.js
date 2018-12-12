import React from 'react'
import './Tag.css'

const Tag = (props) => {

    const removeTag = (e) => {
        props.removeTag(e)
    }

    return (
        <span className='--tag tag-container'>
            <p className='--tag tag-text'>{props.value}</p>
            <span className='--tag tag-x' id={props.tagId} onClick={removeTag}>+</span>
        </span>
    )
}

export default Tag
