import React,{useState} from "react"
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import "./GroupChat.css"

const messages=[{received:'yes',name:'halasalhab',message:'trying',timestamp:'12AM'},{received:'yes',name:'halasalhab',message:'trying',timestamp:'12AM'}]
function GroupChat (){
    const [input,setInput]=useState('');
  const SendMessage=async (e)=>{
    e.preventDefault();
    setInput("");
}
    return(
        <div>
            <div className="chat">
      <div className="chat__header">
        <Avatar src="https://evinas.com/wp-content/uploads/2020/07/%D9%84%D8%B5%D9%88%D8%B1-%D8%A8%D9%86%D8%A7%D8%AA-%D9%83%D9%8A%D9%88%D8%AA-%D9%81%D9%8A%D8%B3-%D8%A8%D9%88%D9%83-%D9%83%D8%B1%D8%AA%D9%88%D9%86-2.jpg"/>
        <div className="chat__headerInfo">
          <h3>Bushra Salhab</h3>
          <p>last seen 2 hours ago </p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message)=>(
        <p className={`chat__message ${message.received && "chat__reciever"}`}>
          <span className="chat__name">{message.name}</span>
            {message.message}
        <span className="chat__timestamp">
            {message.timestamp}</span>
        </p>
        ))}
      </div>
      <div className="chat__footer">
      <from>
        <input value={input}  onChange={(e)=>setInput(e.target.value)} placeholder="Type a message" type="text" ></input>
        <button onClick={SendMessage}type="submit">Send a message
        </button>
      </from>
      </div>
    </div>
        </div>
    )
}


export default GroupChat