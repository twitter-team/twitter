import React from 'react'
import LongMenu from "../Dropdowm/dropdown"
import { connect } from "react-redux"
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    purple: {
      color: theme.palette.getContrastText(deepPurple[400]),
      backgroundColor: deepPurple[400],
      marginRight:"5px"
    },
  }));

const ProfileAndDropDown = ({user}) => {
    const classes = useStyles();

    return (
      <div style={{display:"flex",alignItems:"center"}}>
        <Link to="/profile" style={{textDecoration:"none",cursor:"pointer"}}>
          <Avatar className={classes.purple}>{user.name[0].toUpperCase()}</Avatar>
        </Link>
          <h4 >{user.name.toUpperCase()}</h4>
          <LongMenu/>
      </div>
    );
  }
  
 const mapStateToProps=({user:{user}})=>{
     return {
         user
     }
 }
  
  export default connect(mapStateToProps)(ProfileAndDropDown);