import React from "react"
import NavBar from "../navBar/navBar"
import "./profile.css"
import Bookmarks from "../Bookmarks/bookmarks"
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux'


const Profile = ({ user }) => {
    return (
        <div>
            <NavBar />
            <div className='profile'>

                <div className='backprofile__picture'></div>
                <div className='homepage__text'  >
                    <div className='profile__picture' ></div>
                    <div className="profile__right ">
                        <h3>{user.name.toUpperCase()}</h3>
                        <div className="profile__follower">
                            <span><strong>0</strong> following</span>
                            <span style={{ marginLeft: "10px" }}><strong>0</strong> followers</span>
                        </div>
                        {/* <Button variant="contained" color="primary">
                            follow
                        </Button> */}
                    </div>
                    <h4 className="profile__about">Photographer & Film maker</h4>
                </div>
            </div>
            <div style={{ marginTop: "8%" }}>
                <Bookmarks />
            </div>
        </div>
    )
}
const mapStateToProps = ({ user: { user } }) => {
    return {
        user
    }
}
export default connect(mapStateToProps)(Profile)