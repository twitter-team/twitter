import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { connect } from "react-redux"
import RegisterDialog from "../Header/registerDialog"
import LogInDialog from "../Header/loginDialog"
import ProfileAndDropDown from "../profileAndDropdown/profileAndDropdown"
import Bookmarks from "../Bookmarks/bookmarks"
import Home from "../Home/home"
import Explore from "../Explore/explore"
import "../Header/style.css"
import { Link } from 'react-router-dom';


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

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

const ScrollableTabsButtonAuto = function ({ isAuth, logOut }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root} >

            <AppBar position="static" color="default" style={{ maxHeight: "70px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Link to="/" style={{cursor:"pointer"}}>
                    <img className='header__logo' src='https://acruxlatam.com/images/logo-acrux-md.png' alt='Twitter' />
                </Link>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    style={{ marginTop: "10px" }}
                >

                    <Tab label="Home" {...a11yProps(0)} />
                    <Tab label="Explore" {...a11yProps(1)} />
                    <Tab label="Bookmarks" {...a11yProps(2)} />

                </Tabs>
                <div className='header__taps'>
                    {
                        !isAuth ?
                            <div style={{ display: "flex" }}>
                                <h4 className='tap'><LogInDialog /></h4>
                                <h4 className='tap'><RegisterDialog /></h4>
                            </div>
                            :
                            <ProfileAndDropDown />
                    }
                </div>
            </AppBar>
            <TabPanel value={value} index={0} >
                <Home />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Explore />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Bookmarks />
            </TabPanel>
        </div>
    );
}
const mapStateToProps = ({ user: { isAuth } }) => {
    return {
        isAuth
    }
}

export default connect(mapStateToProps)(ScrollableTabsButtonAuto)