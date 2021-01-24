import React from "react"
import Trends from "../Trends/Trends"
import TwitterEmbed from "../TwitterEmbed/TwitterEmbed"
const Home =()=>{
    return(
        <div style={{width:"80%",marginRight:"auto",marginLeft:"auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div style={{width:"70%"}}>
                left
            </div>
            <div style={{width:"30%"}}>
                <Trends/>
                <TwitterEmbed/>
            </div>
        </div>
    )
}
export default Home