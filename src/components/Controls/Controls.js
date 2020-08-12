import React from 'react';
import Keywords from './../Keywords/Keywords';
import './Controls.css';
import Counter from './../Counter/Counter';
import Button from './../Button/Button';

const Controls = (props) => {
	// just passin on thru
	// don't forget that e
	// you need that e buddy boy
	const updateSearchSettings = (e) => {
		props.updateSearchSettings(e);
	};

	// gets n number of random images without a quantity param
	const getImages = () => {
		props.getImages();
	};

	// dynamically sets height based on loaded images
	const updateHeight = () => {
		props.updateHeight();
	};

	// pass the tag thru
	const handleAddKeyword = (e, newTag) => {
		props.handleAddKeyword(e, newTag);
	};

	// get out of my town
	const removeTag = (tagId) => {
		props.removeTag(tagId);
	};

	// how many images ?
	// one less that's how many
	const decrementCounter = (e) => {
		props.decrementCounter(e);
	};

	// same joke but with a plus instead
	const incrementCounter = (e) => {
		props.incrementCounter(e);
	};

	return (
		// controls container
		<div className={`controls controls--${props.theme}`}>
			{/* 'tags' and input for said tags */}
			{/* <Keywords 
                handleAddKeyword={handleAddKeyword}
                tags={props.tags}
                removeTag={removeTag}
            /> */}

			{/* image quantity and +/- buttons */}
			{/* <Counter 
                decrementCounter={decrementCounter}
                incrementCounter={incrementCounter}
                handleCounterChange={updateSearchSettings}
                counterValue={props.limit}
            /> */}

			{/* generates dynamic quantity and type of images based on parent state */}
			<Button
				buttonModifier={`generate-images button--generate-images--${props.theme}`}
				handleButtonClick={getImages}
				buttonText='Refresh'
			/>
			{/* <div className='controls__reset-controls'> */}
			{/* resets height calculation to resize grid if not done automatically */}
			{/* <div onClick={updateHeight}>Reset Grid</div> */}
			{/* resets search params to defaults and loads 20 random images
                <div onClick={getImages}>Reset Search</div> */}
			{/* </div> */}
		</div>
	);
};

export default Controls;
