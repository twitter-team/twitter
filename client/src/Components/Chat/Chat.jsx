import React from "react"
import NavBar from "../navBar/navBar"
import GroupChat from "../groupChat/GroupChat"
import './Chat.css'
const Chat =()=>{
    return(
        <div>
            <NavBar />
        <div className="app">
            <div className="app__body">
            <GroupChat/>
            </div>
        </div>
        </div>
    )
}
export default Chat
