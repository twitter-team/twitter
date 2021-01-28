import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from "@material-ui/core/IconButton";
import ProfileAndDropDown from "../profileAndDropdown/profileAndDropdown"

import "../Header/style.css"
import "./navBar.css"


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    nav: {
        maxHeight: "70px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    }
}));

const NavBar = function () {
    const classes = useStyles();

    return (
        <div className={classes.root} >

            <AppBar position="static" color="default" className={classes.nav}  >
                <Link to="/" style={{marginLeft:"15px"}}>
                <IconButton color="inherit">
                    <TwitterIcon style={{ fontSize: "50px", color: "rgb(74,160,236)" }} />
                </IconButton>
                </Link>
                <div className='header__taps'>
                    <ProfileAndDropDown />
                </div>
            </AppBar>
        </div>
    );
}

export default NavBar