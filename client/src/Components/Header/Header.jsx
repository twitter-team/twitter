import React from 'react'
import './style.css'

const Header = () => {
    return(
        <div className='header'>
            <img className='header__logo' src='' alt='logo' />
            <div className='header__taps'>
                <h4 className='tap'>Login</h4>
                <h4 className='tap'>Sign up</h4>
            </div>

        </div>
    )
}

export default Header