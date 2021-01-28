import React from 'react'
import Navb from "../Navb/Navb.jsx"
import './Welcome.css'
export default function Welcome() {
    return (
        <div className='welcome' >
            <Navb />
            <img className='tweeter_logo' src='https://icons-for-free.com/iconfiles/png/512/twitter+twitter+button+twitter+logo+icon-1320190501026673072.png' alt='Twitter' />
            <h2>Welcome to our community</h2>
        </div>
    )
}
