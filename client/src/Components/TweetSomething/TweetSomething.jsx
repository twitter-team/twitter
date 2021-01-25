import React from "react"
import Avatar from '@material-ui/core/Avatar';
import ProfileImage from "../../assets/girl.jpg"
import WhatisHappenSearch from "../WhatIsHappenSearch/WhatisHappenSearch"
import ImageIcon from '@material-ui/icons/Image';
import PublicIcon from '@material-ui/icons/Public';
import Button from '@material-ui/core/Button';


const TweetSomething = () => {
    return (
        <div style={{ marginLeft: "10px", textAlign: "start", boxShadow: "7px 10px 87px 16px rgba(0,0,0,0.1)", padding: "20px", paddingTop: "10px", borderRadius: "20px", backgroundColor: "#f5f8fa" }}>
            <div>
                <h3 style={{ borderBottom: "1px solid gray" }}>Tweet Something </h3>
                <div style={{ display: "flex" }}>
                    <Avatar ><img style={{ width: "50px", height: "40px" }} src={ProfileImage} /></Avatar>
                    <div style={{ width: "90%" }}>
                        <WhatisHappenSearch />
                        <div style={{ marginTop: "5px", marginLeft: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <ImageIcon color="primary" />
                                <div style={{ cursor:"pointer",display: "flex", alignItems: "center", marginLeft: "10px", color: "blue" }}>
                                    <PublicIcon color="primary" />
                                    <small style={{ paddingLeft: "5px" }}>Everyone can reply</small>
                                </div>
                            </div>
                            <Button variant="contained" color="primary">
                                Tweet
                        </Button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )

}
export default TweetSomething