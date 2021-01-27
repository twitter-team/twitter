import React from "react"
import Avatar from '@material-ui/core/Avatar';
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



const TweetBody = ({ user,tweetResult }) => {
    const isActive=useMediaQuery('(max-width:900px)')

    return (
        <div className="tweet-body">
            <div className="tweet__top" >
                <Link to="/profile" className="twet__top__image">
                    <Avatar ><img className=" avatar__image" src={user.profilepic} />{user.name[0]}</Avatar>
                </Link>

                <div className='top__date'>
                    <h4 style={{ margin: "0px" }} >{user&& user.name.toUpperCase()}</h4>
                    <h5 style={{ margin: "0px", color: "gray" }}>{tweetResult.createdAt.split("T")[0]}</h5>
                </div>
            </div>
            <h4 style={{ color: "gray" }}>
              {tweetResult.caption}
            </h4>
            <img className="tweet__image" src={tweetResult.img} />

            <div className="comments-saves ">
                <h5 style={{ marginRight: "10px" }}>{tweetResult.comments.length} comments</h5>
                <h5>{tweetResult.saved.length?tweetResult.saved.length:0} saves</h5>
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
                <div style={{color:"green"}}>
                    <LoopIcon />
                    {
                        !isActive?
                        <h4 style={{ marginLeft: "0.5rem" }}>Retweet</h4>
                        :
                        <></>
                    }
                    
                </div>
                <div style={{color:"red"}}>
                    <FavoriteBorderIcon />
                    {
                        !isActive?
                        <h4 style={{ marginLeft: "0.5rem" }}>Like</h4>
                        :
                        <></>
                    }
                   
                </div>
                <div style={{color:"blue"}}>
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
                    <Avatar ><img className="avatar__image" src={user.profilepic} />{user.name[0]}</Avatar>
                </Link>
                <SearchBar tweetid={tweetResult._id}/>
            </div>
            {
                tweetResult.comments.map(comment=>{
                    return(

            <div className="profile-othercomment">
                <Link to="/profile" className="profile-link">
                    <Avatar ><img className="avatar__image" src={comment.userid.profilepic} />{user.name[0]}</Avatar>
                </Link>
                <div style={{ marginLeft: "1rem" }}>

                    <div className="tweet__top" >
                        <h4 style={{ margin: "0px" }} >{user&&user.name.toUpperCase()}</h4>
                        <h5 style={{ margin: "0px", color: "gray", marginLeft: "1rem" }}>{comment.createdAt.split("T")[0]}</h5>
                        {/* <h5 style={{ margin: "0px", color: "gray", marginLeft: "1rem" }}>24 Augest 20:34</h5> */}
                    </div>
                    <h4 className="actual-comment" >{comment.comment}</h4>
                    <div className="like-comment">

                        <div className="like-icon">
                            <FavoriteBorderIcon />
                            <h4 style={{margin:"0px", marginLeft: "0.5rem" }}>Like </h4>
                        </div>
                        <h4 style={{margin:"0px", marginLeft: "2rem" }}> {0 || comment.likes} Likes</h4>
                    </div>
                </div>
            </div>
                    )
                })
            }
        </div>
    )

}
const mapStateToProps = ({ user: { user } }) => {
    return {
        user
    }
}
export default connect(mapStateToProps)(TweetBody)