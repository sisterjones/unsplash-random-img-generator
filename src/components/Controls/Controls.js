import React from 'react'
import Keywords from './../Keywords/Keywords'
import './Controls.css'

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
            
                    <input value={props.limit} onChange={updateSearchSettings} type='number' max='30' min='0' name='limit' />
                    </div>
                    <div>
                    <button onClick={submitSearch}>Generate</button>
                    </div>
                    <div className='reset-button --reset-grid'>
                    <button onClick={updateHeight}>Reset Grid</button>
                </div>
                <div className='reset-button --reset-results'>
                    <button onClick={getImages}>Reset Search and Refresh</button>
                </div>
            </div>
        )
    }


export default Controls