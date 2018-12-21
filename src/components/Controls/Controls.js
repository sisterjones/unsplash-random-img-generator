import React from 'react'
import Keywords from './../Keywords/Keywords'
import './Controls.css'
import Counter from './../Counter/Counter'
import Button from './../Button/Button'

const Controls = (props) => {

    const updateSearchSettings = (e) => {
        props.updateSearchSettings(e)
    }

    const submitSearch = () => {
        props.getImagesWithQuery()
    }

    const getImages = () => {
        props.getImages()
    }

    const updateHeight = () => {
        props.updateHeight()
    }

    const handleAddKeyword = (e, newTag) => {
        props.handleAddKeyword(e, newTag)
    }

    const removeTag = (e) => {
        props.removeTag(e)
    }

    const decrementCounter = (e) => {
        props.decrementCounter(e)
    }

    const incrementCounter = (e) => {
        props.incrementCounter(e)
    }


    return (
        <div className='controls'>
            <Keywords 
                handleAddKeyword={handleAddKeyword}
                tags={props.tags}
                removeTag={removeTag}
            />
            <Counter 
                decrementCounter={decrementCounter}
                incrementCounter={incrementCounter}
                handleCounterChange={updateSearchSettings}
                counterValue={props.limit}
            />
            <Button
                buttonModifier='generate-image'
                handleButtonClick={submitSearch}
                buttonText='Generate'
            />
            <Button
                buttonModifier='reset-grid'
                handleButtonClick={updateHeight}
                buttonText='Reset Grid'
            />
            <Button
                buttonModifier='reset-search'
                handleButtonClick={getImages}
                buttonText='Reset Search'
            />
        </div>
    )
}


export default Controls