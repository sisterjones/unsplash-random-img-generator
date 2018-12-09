import React from 'react'

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
                <div className='refresh-button'>
                    <button onClick={getImages}>12 Random Images</button>
                    <button onClick={updateHeight}>height test</button>
                </div>
                <div className='search bar'>
                    <input value={props.query} onChange={updateSearchSettings} type='text' name='query' />
                    <input value={props.limit} onChange={updateSearchSettings} type='number' max='30' min='0' name='limit' />
                    <button onClick={submitSearch}>{props.limit} Random Images with Keyword {props.query}</button>
                </div>
            </div>
        )
    }


export default Controls