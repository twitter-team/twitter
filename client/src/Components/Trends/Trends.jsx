import React from "react"
import "./Trends.css"
const Trends = () => {
    return (
        <div className="trends" >
            <div className="trends_div">
                <h3 >Trends for you </h3>

                <ul >
                    <h4>#Programming</h4>
                    <small> 213K tweets</small>
                </ul>
                <ul >
                    <h4>#DevChallenges</h4>
                    <small> 22K tweets</small>
                </ul>
                <ul >
                    <h4>#Frontend</h4>
                    <small> 59K tweets</small>
                </ul>
                <ul >
                    <h4>#helsinki</h4>
                    <small> 500K tweets</small>
                </ul>
                <ul >
                    <h4>#100DaysOfCode</h4>
                    <small> 213K tweets</small>
                </ul>
            </div>

        </div>
    )

}
export default Trends