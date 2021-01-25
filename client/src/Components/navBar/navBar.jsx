import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

import ProfileAndDropDown from "../profileAndDropdown/profileAndDropdown"

import "../Header/style.css"



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
}));

const NavBar = function () {
    const classes = useStyles();

    return (
        <div className={classes.root} >

            <AppBar position="static" color="default" style={{ maxHeight: "70px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Link to="/" style={{ cursor: "pointer" }}>
                    <img className='header__logo' src='https://acruxlatam.com/images/logo-acrux-md.png' alt='Twitter' />
                </Link>
                <div className='header__taps'>
                    <ProfileAndDropDown />
                </div>
            </AppBar>
        </div>
    );
}

export default NavBar