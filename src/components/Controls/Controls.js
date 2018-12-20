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
        console.log('hi')
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
        <div className='controls-container'>
            <div className='search-fields'>
                <Keywords 
                    handleAddKeyword={handleAddKeyword}
                    tags={props.tags}
                    removeTag={removeTag}
                />
            </div>
            <div>
                <Counter 
                    decrementCounter={decrementCounter}
                    incrementCounter={incrementCounter}
                    handleCounterChange={updateSearchSettings}
                    counterValue={props.limit}
                />
            </div>
            <div>
                <Button
                    buttonClass='generate-image-button'
                    handleButtonClick={submitSearch}
                    buttonText='Generate'
                />
            </div>
            <div className='reset-button --reset-grid'>
                <Button
                    buttonClass='reset-grid-button'
                    handleButtonClick={updateHeight}
                    buttonText='Reset Grid'
                />
            </div>
            <div className='reset-button --reset-results'>
                <Button
                    buttonClass='generate-image-button'
                    handleButtonClick={getImages}
                    buttonText='Reset Search'
                />
            </div>
        </div>
    )
}


export default Controls