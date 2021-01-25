import React from "react";
import "./TwitterEmbed.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="AndreiNeagoie"
                    options={{ height: 400 }}
                />

            </div>
        </div>
    );
}

export default Widgets;
