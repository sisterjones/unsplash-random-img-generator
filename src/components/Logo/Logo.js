import React from 'react'
import './Logo.css'
import logoLight from './../../Assets/Images/Atoms/Logo/Brand/Sign.svg'
import logoDark from './../../Assets/Images/Atoms/Logo/Brand/Sign Copy.svg'

const Logo = (props) => {
    return (
        <div className={`logo logo--${props.theme}`}>
            <img className={`logo__image`} src={props.theme === 'light' ? logoLight : logoDark} alt='RIG logo' />
        </div>
    )
}

export default Logo