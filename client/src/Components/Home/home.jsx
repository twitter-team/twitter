import "./home.css"
import React from "react"
import Trends from "../Trends/Trends"
import TwitterEmbed from "../TwitterEmbed/TwitterEmbed"
import TweetSomething from "../TweetSomething/TweetSomething"
import TweetBody from "../TweetBody/TweetBody"
const Home =()=>{
    return(
        <div className="homepage">
            <div className="hamepage__left">
            <TweetSomething/>
            <TweetBody/>
            </div>
            <div className="hamepage__right">
                <Trends/>
                <TwitterEmbed/>
            </div>
        </div>
    )
}
export default Home