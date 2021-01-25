import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { connect } from "react-redux"
import { logOut } from "../../Redux/user/userAction"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link } from 'react-router-dom';


const ITEM_HEIGHT = 54;

const LongMenu = function ({ logOut }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickLogout = () => {
        localStorage.removeItem("Authorization")
        logOut()
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        marginTop: "60px",
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: "20ch",
                        padding: "10px",
                        marginLeft: "-30px",
                        borderRadius: "10px"
                    }
                }}
            >
                <Link to="/profile" style={{textDecoration:"none",cursor:"pointer"}}>
                <MenuItem style={{padding:"0px" }} onClick={handleClose}> <AccountCircleIcon/><p style={{marginLeft:"5px"}}>My Profile</p></MenuItem>
                </Link>
                <MenuItem style={{padding:"0px" }} onClick={handleClose}><SupervisorAccountIcon/><p style={{marginLeft:"5px"}}>Group Chat</p></MenuItem>
                <MenuItem style={{padding:"0px" }} onClick={handleClose}><SettingsIcon/><p style={{marginLeft:"5px"}}>Settings</p></MenuItem>
                <MenuItem style={{ padding:"0px" , borderTop: "1px solid gray", color: "red" }} onClick={handleClickLogout}><ExitToAppIcon /><p style={{marginLeft:"5px"}}>  Log Out</p></MenuItem>
            </Menu>
        </div>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(LongMenu)