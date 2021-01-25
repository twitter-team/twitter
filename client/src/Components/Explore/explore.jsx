import React from "react"
import VerticalTabs from "../verticalTab/verticalTab"

const Explore =()=>{
    return(
        <div style={{width:"80%",marginRight:"auto",marginLeft:"auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* <div style={{width:"30%"}}>
                left
            </div>
            <div style={{width:"70%"}}>
                right
            </div> */}
            <VerticalTabs items={["top","latest","people","media"]}/>
        </div>
    )
}
export default Explore