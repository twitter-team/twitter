import React from "react"
import VerticalTabs from "../verticalTab/verticalTab"
import "./explore.css"
const Explore =()=>{
    return(
        <div className="explore" >
            <VerticalTabs items={["top","latest","people","media"]}/>
        </div>
    )
}
export default Explore