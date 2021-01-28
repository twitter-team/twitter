import React, { useState } from "react"
import { Avatar, IconButton } from "@material-ui/core";
import "./GroupChat.css"

const messages = [{ received: 'yes', name: 'halasalhab', message: 'trying', timestamp: '12AM' }, { received: 'yes', name: 'halasalhab', message: 'trying', timestamp: '12AM' }]
function GroupChat() {
    const [input, setInput] = useState('');
    const SendMessage = async (e) => {
        e.preventDefault();
        setInput("");
    }
    return (

        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerInfo">
                    <h3>Wellcome to group chat</h3>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
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
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a message" type="text" ></input>
                    <button onClick={SendMessage} type="submit">🕊️</button>
                </from>
            </div>
        </div>
    )
}


export default GroupChat