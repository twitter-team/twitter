import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import "../Header/style.css"
import "./Navb.css"
import MaxWidthDialog from '../Header/registerDialog.jsx'
import MaxWidthDialog2 from '../Header/loginDialog.jsx'
// import TwitterIcon from "@material-ui/icons/Twitter";
// import { GiHummingbird } from "react-icons/gi";
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    nav: {
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
                <Link to="/welcome" style={{ cursor: "pointer", height: "100%" }}>
                    <IconButton href="/home" color="inherit">
                        <TwitterIcon  style={{ fontSize: "50px",color:"rgb(74,160,236)" }} />
                    </IconButton>
                    {/* <img className='header__logo' style={{height:"200px"}} src='https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80' alt='Twitter' /> */}
                </Link>
                <div className='header__taps' style={{ display:"flex", justifyContent: 'space-between',width:"180px" }}>
                    <MaxWidthDialog />
                    <MaxWidthDialog2 />
                </div>

            </AppBar>
        </div>
    );
}

export default Navb