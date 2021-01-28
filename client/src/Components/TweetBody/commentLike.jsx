import React, { useState } from "react"
import Avatar from '@material-ui/core/Avatar';
import TweetBodyImage from "../../assets/nature.jpg"
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import "./TweetBody.css"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const CommentLike = ({ comment, user }) => {
    const [commentLike, setCommentLike] = useState("")


    const handleCommentLike = () => {
        setCommentLike(commentLike === "" ? "red" : "")
    }
    return (
        <div className="profile-othercomment" >
            <Link to="/profile" className="profile-link">
                <Avatar ><img className="avatar__image" src={comment.userid.profilepic} />{user.name[0]}</Avatar>
            </Link>
            <div style={{ marginLeft: "1rem",height:"0%" }}>

                <div className="tweet__top" >
                    <h4 style={{ margin: "0px" }} >{user && user.name.toUpperCase()}</h4>
                    <h5 style={{ margin: "0px", color: "gray", marginLeft: "1rem" }}>{comment.createdAt.split("T")[0]}</h5>
                    {/* <h5 style={{ margin: "0px", color: "gray", marginLeft: "1rem" }}>24 Augest 20:34</h5> */}
                </div>
                <h4 className="actual-comment" >{comment.comment}</h4>
                {console.log("ffffffffffffffffffffff",comment)}
                {
                    comment.img?
                    <img src={comment.img} style={{maxWidth:"30%",maxHeight:"40%"}}/>
                    :<></>
                }
                <div className="like-comment">

                    <div className="like-icon" style={{ color: commentLike }} onClick={handleCommentLike}>
                        <FavoriteBorderIcon />
                        <h4 style={{ margin: "0px", marginLeft: "0.5rem" }}>Liked </h4>
                    </div>
                    <h4 style={{ margin: "0px", marginLeft: "2rem" }} > {0 || comment.likes} Likes</h4>
                </div>
            </div>
        </div>
    )
}
export default CommentLike