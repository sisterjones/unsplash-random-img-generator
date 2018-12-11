import React from 'react'
import Keywords from './../Keywords/Keywords'

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

        return (
            <div>
                <div className='reset-button --reset-grid'>
                    <button onClick={updateHeight}>Reset Grid</button>
                </div>
                <div className='reset-button --reset-results'>
                    <button onClick={getImages}>Reset Search and Refresh</button>
                </div>
                <div className='search-fields'>
                    <Keywords />
                    <input value={props.query} onChange={updateSearchSettings} type='text' name='query' />
                    <input value={props.limit} onChange={updateSearchSettings} type='number' max='30' min='0' name='limit' />
                    <button onClick={submitSearch}>{props.limit} Random Images with Keyword {props.query}</button>
                </div>
            </div>
        )
    }


export default Controls