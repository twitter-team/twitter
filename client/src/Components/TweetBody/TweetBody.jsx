import React, { useState, useEffect } from "react"
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
import CommentLike from "./commentLike"
import { reloadIt,loadUser } from '../../Redux/user/userAction'

const TweetBody = ({ user,reloadIt,reloadme,loadUser, tweetResult }) => {
    const isActive = useMediaQuery('(max-width:900px)')
    const [like, setLike] = useState("")
    const [retweet, setRetweet] = useState("")
    const [save, setSave] = useState("")

    useEffect(() => {
        loadUser()
    }, [reloadme])

    const handleLike = async () => {
        reloadIt()
        setLike(like === "" ? "red" : "")
        if (like === "") {//add to book mark
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userid: user.id, tweetid: tweetResult._id })
            };
            const res = await fetch(`http://localhost:5000/api/user/likes`, requestOptions)
            const data = await res.json()
            await reloadIt()
        } else {//remove from book mark
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userid: user.id })
            };
            const res = await fetch(`http://localhost:5000/api/user/unlike`, requestOptions)
            const data = await res.json()
            await reloadIt()
        }
    }
    const handleRetweet = async () => {
        reloadIt()
        setRetweet(retweet === "" ? "green" : "")
        if (retweet === "") {//add to book mark
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userid: user.id, tweetid: tweetResult._id })
            };
            const res = await fetch(`http://localhost:5000/api/user/retweet`, requestOptions)
            const data = await res.json()
            await reloadIt()
        }
    }

    const handleSave = async () => {
        reloadIt()
        setSave(save === "" ? "blue" : "")
        if (save === "") {//add to book mark
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userid: user.id, tweetid: tweetResult._id })
            };
            const res = await fetch(`http://localhost:5000/api/user/addBookmark`, requestOptions)
            const data = await res.json()
            await reloadIt()
        } else {//remove from book mark
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userid: user.id })
            };
            const res = await fetch(`http://localhost:5000/api/user/deleteBookmark`, requestOptions)
            const data = await res.json()
            await reloadIt()
        }
    }

    return (
        <div className="tweet-body">
            <div className="tweet__top" >
                <Link to="/profile" className="twet__top__image">
                    <Avatar ><img className=" avatar__image" src={user && user.profilepic} />{user&& user.name[0]}</Avatar>
                </Link>

                <div className='top__date'>
                    <h4 style={{ margin: "0px" }} >{user && user.name.toUpperCase()}</h4>
                    <h5 style={{ margin: "0px", color: "gray" }}>{tweetResult.createdAt.split("T")[0]}</h5>
                </div>
            </div>
            <h4 style={{ color: "gray" }}>
                {tweetResult.caption}
            </h4>
            {
                tweetResult.img?
                <img className="tweet__image" src={tweetResult.img} />
                :<></>
            }

            <div className="comments-saves ">
                <h5 style={{ marginRight: "10px" }}>{tweetResult.comments.length} comments</h5>
                <h5 style={{ marginRight: "10px" }}>{tweetResult.likes ? tweetResult.likes : 0} likes</h5>
                <h5 style={{ marginRight: "10px" }}>{tweetResult.retweets ? tweetResult.retweets : 0} retweets</h5>
                <h5>{tweetResult.saved ? tweetResult.saved : 0} saves</h5>
            </div>
            <div className='comments-sec'>
                <div>
                    <ChatBubbleOutlineIcon />
                    {
                        !isActive ?
                            <h4 style={{ marginLeft: "0.5rem", alignItems: "center" }}>Comment</h4>
                            :
                            <></>
                    }
                </div>
                <div style={{ color: retweet }} onClick={handleRetweet}>
                    <LoopIcon />
                    {
                        !isActive ?
                            <h4 style={{ marginLeft: "0.5rem" }}>Retweeted</h4>
                            :
                            <></>
                    }

                </div>
                <div style={{ color: like }} onClick={handleLike}>
                    <FavoriteBorderIcon />
                    {
                        !isActive ?
                            <h4 style={{ marginLeft: "0.5rem" }}>Liked</h4>
                            :
                            <></>
                    }

                </div>
                <div style={{ color: save }} onClick={handleSave}>
                    <BookmarkBorderIcon />
                    {
                        !isActive ?
                            <h4 style={{ marginLeft: "0.5rem" }}>Saved</h4>
                            :
                            <></>
                    }

                </div>
            </div>
            <div className="profile-comment" >
                <Link to="/profile" className="profile-link">
                    <Avatar ><img className="avatar__image" src={user.profilepic} />{user.name[0]}</Avatar>
                </Link>
                <SearchBar tweetid={tweetResult._id} />
            </div>
            {
                tweetResult.comments && tweetResult.comments.map(comment => {
                    return (

                        <CommentLike comment={comment} user={user} />
                    )
                })
            }
        </div>
    )

}
const mapStateToProps = ({ user: { user,reloadme } }) => {
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
export default connect(mapStateToProps, mapDispatchToProps)(TweetBody)