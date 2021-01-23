import React from "react"
import VerticalTabs from "../verticalTab/verticalTab"
const Bookmarks =()=>{
    return(
        <div style={{width:"80%",marginRight:"auto",marginLeft:"auto",display:"flex",justifyContent:"center",alignItems:"center"}}>
            {/* <div style={{width:"30%"}}>
                left
            </div>
            <div style={{width:"70%"}}>
                right
            </div> */}
    <VerticalTabs items={["Tweets","Tweets & Replies","Media","Likes"]}/>
        </div>
    )
}
export default Bookmarks