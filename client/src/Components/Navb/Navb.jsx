import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom'; 
import "../Header/style.css"
import "./Navb.css"
import MaxWidthDialog from '../Header/registerDialog.jsx'
import MaxWidthDialog2 from '../Header/loginDialog.jsx'
import TwitterIcon from "@material-ui/icons/Twitter";

const useStyles = makeStyles((theme) => ({
    nav:{
        maxHeight: "70px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
}));


const Navb = function () {
    const classes = useStyles();

    return (
        <div className={classes.root} >

            <AppBar position="static" color="default" className={classes.nav}  >
                <Link to="/welcome" style={{ cursor: "pointer" }}>
                    <img className='header__logo' src='https://icons-for-free.com/iconfiles/png/512/twitter+twitter+button+twitter+logo+icon-1320190501026673072.png' alt='Twitter' />
                </Link>
                <div className='header__taps'style={{justifyItems:'space-between'}}>
                    <MaxWidthDialog/>
                    <MaxWidthDialog2/>
                </div>
                
            </AppBar>
        </div>
    );
}

export default Navb