import React from "react"

const Trends = () => {
    return (
        <div style={{ marginLeft:"10px",textAlign: "start", boxShadow: "7px 10px 87px 16px rgba(0,0,0,0.1)", padding: "20px",paddingTop:"10px", borderRadius: "20px", backgroundColor: "#f5f8fa" }}>
            <div>
                <h3 style={{ borderBottom: "1px solid gray" }}>Trends for you </h3>

                <ul style={{ padding: "0px",cursor:"pointer" }}>
                    <h4 style={{ margin: "0px" }}>#Programming</h4>
                    <small style={{ color: "gray" }}> 213K tweets</small>
                </ul>
                <ul style={{ padding: "0px",cursor:"pointer" }}>
                    <h4 style={{ margin: "0px" }}>#DevChallenges</h4>
                    <small style={{ color: "gray" }}> 22K tweets</small>
                </ul>
                <ul style={{ padding: "0px",cursor:"pointer" }}>
                    <h4 style={{ margin: "0px" }}>#Frontend</h4>
                    <small style={{ color: "gray" }}> 59K tweets</small>
                </ul>
                <ul style={{ padding: "0px",cursor:"pointer" }}>
                    <h4 style={{ margin: "0px" }}>#helsinki</h4>
                    <small style={{ color: "gray" }}> 500K tweets</small>
                </ul>
                <ul style={{ padding: "0px",cursor:"pointer" }}>
                    <h4 style={{ margin: "0px" }}>#100DaysOfCode</h4>
                    <small style={{ color: "gray" }}> 213K tweets</small>
                </ul>
            </div>

        </div>
    )

}
export default Trends