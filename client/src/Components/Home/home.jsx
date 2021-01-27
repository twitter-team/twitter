import "./home.css"
import React from "react"
import Trends from "../Trends/Trends"
import TwitterEmbed from "../TwitterEmbed/TwitterEmbed"
import TweetSomething from "../TweetSomething/TweetSomething"
import TweetBody from "../TweetBody/TweetBody"
import {connect} from "react-redux"

const Home =({user})=>{
    return(
        <div className="homepage">
            <div className="hamepage__left">
            <TweetSomething/>
            {
                user&& user.tweets.reverse().map(tweet=>{
                    
                    return(
                        <TweetBody tweetResult={tweet}/>
                    )
                })
            }
            </div>
            <div className="hamepage__right">
                <Trends/>
                <TwitterEmbed/>
            </div>
        </div>
    )
}
const mapStateToProps=({user:{user}})=>{
    return {
        user
    }
}
export default connect(mapStateToProps)(Home)