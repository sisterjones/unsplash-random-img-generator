import React from 'react'
import PropTypes from 'prop-types'
import './CounterButton.css'

const CounterButton = props => {

    const handleCounterButtonClick = (e) => {
        switch(props.plusMinus) {
            case '+':
                props.incrementCounter(e)
                break
            case '-':
                props.decrementCounter(e)
                break
            default:
            return
        }
    }

    return (
        <div onClick={handleCounterButtonClick} className='counter-button'>
            {props.plusMinus}
        </div>
    )
}

CounterButton.propTypes = {

}

export default CounterButton
