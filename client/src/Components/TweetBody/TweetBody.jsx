import React from "react"
import Avatar from '@material-ui/core/Avatar';
import ProfileImage from "../../assets/girl.jpg"
import TweetBodyImage from "../../assets/nature.jpg"
import { connect } from "react-redux"
import { Link } from 'react-router-dom';
import "./TweetBody.css"
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import LoopIcon from '@material-ui/icons/Loop';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SearchBar from "../searchBarComments/searchBarComments"

const TweetBody = ({ user }) => {
    return (
        <div style={{ marginTop: "20px", marginLeft: "10px", textAlign: "start", boxShadow: "7px 10px 87px 16px rgba(0,0,0,0.1)", padding: "20px", paddingTop: "10px", borderRadius: "20px", backgroundColor: "#f5f8fa" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <Link to="/profile" style={{ textDecoration: "none", cursor: "pointer" }}>
                    <Avatar ><img style={{ width: "50px", height: "40px" }} src={ProfileImage} /></Avatar>
                </Link>
                <div style={{ marginLeft: "10px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h4 style={{ margin: "0px" }} >{user && user.name.toUpperCase()}</h4>
                    <h5 style={{ margin: "0px", color: "gray" }}>24 Augest 20:34</h5>
                </div>
            </div>
            <h4 style={{ color: "gray" }}>
                We travel, some do it forever.....,others they just dont know
            </h4>
            <img className="tweet__image" src={TweetBodyImage} />

            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", color: "gray" }}>
                <h5 style={{ marginRight: "10px" }}>234 comments</h5>
                <h5>234 saves</h5>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", color: "gray", borderTop: "1px solid gray", borderBottom: "1px solid gray" }}>
                <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <ChatBubbleOutlineIcon />
                    <h4 style={{ marginLeft: "5px", alignItems: "center" }}>Comment</h4>
                </div>
                <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <LoopIcon />
                    <h4 style={{ marginLeft: "5px" }}>Retweet</h4>
                </div>
                <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <FavoriteBorderIcon />
                    <h4 style={{ marginLeft: "5px" }}>Like</h4>
                </div>
                <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                    <BookmarkBorderIcon />
                    <h4 style={{ marginLeft: "5px" }}>Save</h4>
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", width: "100%", marginTop: "10px" }}>
                <Link to="/profile" style={{ textDecoration: "none", cursor: "pointer", marginRight: "5px" }}>
                    <Avatar ><img style={{ width: "50px", height: "40px" }} src={ProfileImage} /></Avatar>
                </Link>
                <SearchBar />
            </div>
            <div style={{ display: "flex" , marginTop: "15px"}}>
                <Link to="/profile" style={{ textDecoration: "none", cursor: "pointer" }}>
                    <Avatar ><img style={{ width: "50px", height: "40px" }} src={ProfileImage} /></Avatar>
                </Link>
                <div style={{ marginLeft: "10px" }}>

                    <div style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ margin: "0px" }} >{user && user.name.toUpperCase()}</h4>
                        <h5 style={{ margin: "0px", color: "gray", marginLeft: "10px" }}>24 Augest 20:34</h5>
                    </div>
                    <h4 style={{ margin: "0px",marginLeft:"15px", color: "rgb(68, 68, 67)" }} >whatever you like</h4>
                    <div style={{display:"flex",color:"gray"}}>

                    <div style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                        <FavoriteBorderIcon />
                        <h4 style={{ marginLeft: "5px" }}>Like</h4>
                    </div>
                    <h4 style={{ marginLeft: "15px" }}> 255 Likes</h4>
                    </div>
                </div>
            </div>
        </div>
    )

}
const mapStateToProps = ({ user: { user } }) => {
    return {
        user
    }
}
export default connect(mapStateToProps)(TweetBody)