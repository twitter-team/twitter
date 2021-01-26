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
import useMediaQuery from '@material-ui/core/useMediaQuery';



const TweetBody = ({ user }) => {
    const isActive=useMediaQuery('(max-width:900px)')

    return (
        <div className="tweet-body">
            <div className="tweet__top" >
                <Link to="/profile" className="twet__top__image">
                    <Avatar ><img className=" avatar__image" src={ProfileImage} /></Avatar>
                </Link>

                <div className='top__date'>
                    <h4 style={{ margin: "0px" }} >{user.name.toUpperCase()}</h4>
                    <h5 style={{ margin: "0px", color: "gray" }}>24 Augest 20:34</h5>
                </div>
            </div>
            <h4 style={{ color: "gray" }}>
                We travel, some do it forever.....,others they just dont know
            </h4>
            <img className="tweet__image" src={TweetBodyImage} />

            <div className="comments-saves ">
                <h5 style={{ marginRight: "10px" }}>234 comments</h5>
                <h5>234 saves</h5>
            </div>
            <div className='comments-sec'>
                <div>
                    <ChatBubbleOutlineIcon />
                    {
                        !isActive?
                        <h4 style={{ marginLeft: "0.5rem", alignItems: "center" }}>Comment</h4>
                        :
                        <></>
                    }
                </div>
                <div>
                    <LoopIcon />
                    {
                        !isActive?
                        <h4 style={{ marginLeft: "0.5rem" }}>Retweet</h4>
                        :
                        <></>
                    }
                    
                </div>
                <div>
                    <FavoriteBorderIcon />
                    {
                        !isActive?
                        <h4 style={{ marginLeft: "0.5rem" }}>Like</h4>
                        :
                        <></>
                    }
                   
                </div>
                <div>
                    <BookmarkBorderIcon />
                    {
                        !isActive?
                        <h4 style={{ marginLeft: "0.5rem" }}>Save</h4>
                        :
                        <></>
                    }
                    
                </div>
            </div>
            <div className="profile-comment" >
                <Link to="/profile" className="profile-link">
                    <Avatar ><img className="avatar__image" src={ProfileImage} /></Avatar>
                </Link>
                <SearchBar />
            </div>
            <div className="profile-othercomment">
                <Link to="/profile" className="profile-link">
                    <Avatar ><img className="avatar__image" src={ProfileImage} /></Avatar>
                </Link>
                <div style={{ marginLeft: "1rem" }}>

                    <div className="tweet__top" >
                        <h4 style={{ margin: "0px" }} >{user.name.toUpperCase()}</h4>
                        <h5 style={{ margin: "0px", color: "gray", marginLeft: "1rem" }}>24 Augest 20:34</h5>
                    </div>
                    <h4 className="actual-comment" >whatever you like</h4>
                    <div className="like-comment">

                        <div className="like-icon">
                            <FavoriteBorderIcon />
                            <h4 style={{ marginLeft: "0.5rem" }}>Like</h4>
                        </div>
                        <h4 style={{ marginLeft: "1rem" }}> 255 Likes</h4>
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