import React from 'react'
import './style.css'
import RegisterDialog from "./registerDialog"
import LogInDialog from "./loginDialog"
import { Button} from '@material-ui/core'

const Header = () => {
    const handleClickLogout=()=>{
        localStorage.removeItem("Authorization")
    }
    return(
        <div className='header'>
            <img className='header__logo' src='' alt='Twitter' />
            <div className='header__taps'>
                <h4 className='tap'><LogInDialog/></h4>
                <h4 className='tap'><RegisterDialog/></h4>
                <h4 className='tap'><Button variant="outlined" color="primary" className="login_button" onClick={handleClickLogout}> Logout </Button></h4>
            </div>

        </div>
    )
}

export default Header