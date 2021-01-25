import React from "react"
import VerticalTabs from "../verticalTab/verticalTab"
import "./bookmarks.css"
const Bookmarks = () => {
    return (
        <div className="bookmarks">
            <VerticalTabs items={["Tweets", "Tweets & Replies", "Media", "Likes"]} />
        </div>
    )
}
export default Bookmarks