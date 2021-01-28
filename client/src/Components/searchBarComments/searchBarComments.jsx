import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloudImage from "../uploadImage/uploadImage"
import SendIcon from '@material-ui/icons/Send';
import { connect } from 'react-redux';
import { reloadIt,loadUser } from '../../Redux/user/userAction'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const CustomizedInputBase = function ({ reloadIt, reloadme, loadUser, tweetid, user }) {
  const classes = useStyles();
  const [input, setInput] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    loadUser()
  }, [reloadme])

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }
  const handleImageChange = async (data) => {
    await setImage(data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    reloadIt()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userid: user.id, tweetid: tweetid, comment: input, img: image })
    };
    const res = await fetch(`http://localhost:5000/api/comments/comment`, requestOptions)
    const data = await res.json()
    setInput("")
    setImage("")
  }
  return (
    <Paper component="form" className={classes.root}  >

      <InputBase
        className={classes.input}
        placeholder="Comment here....."
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={handleInputChange}
        value={input}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <CloudImage handleImageChange={handleImageChange} />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={handleSubmit}>
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
const mapStateToProps = ({ user: { user, reloadme } }) => {
  return {
    user,
    reloadme
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    reloadIt: () => dispatch(reloadIt()),
    loadUser: () => dispatch(loadUser()),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomizedInputBase)
