import React from 'react'
import './Tag.css'

const Tag = (props) => {

    const removeTag = () => {
        let tagId = props.tagId
        props.removeTag(tagId)
    }

    return (
        <span className='tag tag--handle-hover' onClick={removeTag}>
            <p className='tag__tag-text tag--handle-hover'>{props.value}</p>
            <span className='tag__tag-x tag--handle-hover'>x</span>
        </span>
    )
}

export default Tag
