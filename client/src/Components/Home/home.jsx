import React from "react"
import Trends from "../Trends/Trends"
import TwitterEmbed from "../TwitterEmbed/TwitterEmbed"
import TweetSomething from "../TweetSomething/TweetSomething"
const Home =()=>{
    return(
        <div style={{width:"80%",marginRight:"auto",marginLeft:"auto",display:"flex",justifyContent:"center"}}>
            <div style={{width:"70%"}}>
            <TweetSomething/>
            </div>
            <div style={{width:"30%"}}>
                <Trends/>
                <TwitterEmbed/>
            </div>
        </div>
    )
}
export default Home