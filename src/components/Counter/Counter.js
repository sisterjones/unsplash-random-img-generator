import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'
import CounterButton from './../CounterButton/CounterButton'

const Counter = (props) => {

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
        <div className='counter-wrapper'>
            <CounterButton 
                plusMinus="-" 
                decrementCounter={decrementCounter}
            />
            <div className='counter-input-container'>
                <input value={props.counterValue} type='number' onChange={handleCounterChange} max='30' min='0' name='limit'/>
            </div>
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

