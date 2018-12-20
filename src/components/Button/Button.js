import React from 'react'

const Button = (props) => {

	const handleButtonClick = (e) => {
		props.handleButtonClick(e)
	}

	return (
		<div className='button-wrapper'>
			<button 
				className={props.buttonClass}
				onClick={handleButtonClick}
			>
				{props.buttonText}
			</button>
		</div>
	)
}

export default Button
