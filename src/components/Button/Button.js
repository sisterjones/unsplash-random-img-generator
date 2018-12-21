import React from 'react'
import './Button.css'

const Button = (props) => {

	const handleButtonClick = (e) => {
		props.handleButtonClick(e)
	}

	return (
			<button 
				className={`button button--${props.buttonModifier}`}
				onClick={handleButtonClick}
			>
				{props.buttonText}
			</button>
	)
}

export default Button
