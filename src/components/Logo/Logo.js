import React from 'react'
import './Logo.css'
import logo from './../../Assets/Images/Logo.svg'

const Logo = (props) => {
    return (
        <div className='logo'>
            <img className='logo__image' src={logo} alt='RIG logo' />
        </div>
    )
}

export default Logo