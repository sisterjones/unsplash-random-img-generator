import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'
import CounterButton from './../CounterButton/CounterButton'

const Counter = (props) => {

    // puff puff pass these through to their parent component

    const decrementCounter = (e) => {
        props.decrementCounter(e)
    }
    const incrementCounter = (e) => {
        props.incrementCounter(e)
    }
    const handleCounterChange = (e) => {
        props.handleCounterChange(e)
    }

    return (
        <div className='counter'>
            {/* minus button */}
            <CounterButton 
                plusMinus="-" 
                decrementCounter={decrementCounter}
            />
            {/* query amount display */}
            <div className='counter__input-container'>
                <input className='counter__counter-input' value={props.counterValue} type='number' onChange={handleCounterChange} max='30' min='0' controls='false' name='limit'/>
            </div>
            {/* plus button */}
            <CounterButton 
                plusMinus="+" 
                incrementCounter={incrementCounter}
            />
        </div>
    )
}

Counter.propTypes = {

}

export default Counter

