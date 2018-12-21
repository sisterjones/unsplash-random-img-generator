import React from 'react'
import './Tag.css'

const Tag = (props) => {

    const removeTag = (e) => {
        props.removeTag(e)
    }

    return (
        <span className='tag'>
            <span><p className='tag__tag-text'>{props.value}</p></span>
            <span className='tag__tag-x' id={props.tagId} onClick={removeTag}>x</span>
        </span>
    )
}

export default Tag
