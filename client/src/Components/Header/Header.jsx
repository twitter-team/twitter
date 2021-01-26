// import React, { useEffect } from 'react'
// import './style.css'
// import RegisterDialog from "./registerDialog"
// import LogInDialog from "./loginDialog"
// import { Button } from '@material-ui/core'
// import { connect } from "react-redux"
// import { logOut } from "../../Redux/user/userAction"
// import ScrollableTabsButtonAuto from "../horizantalTab/horizantalTab"
// const Header = ({ isAuth, logOut }) => {
//     const handleClickLogout = () => {
//         localStorage.removeItem("Authorization")
//         logOut()
//     }

//     // useEffect(()=>{
//     //     console.log("hiii")
//     // },[isAuth])
//     return (
//         <div >
//             <ScrollableTabsButtonAuto/>
//         </div>
//     )
// }

// const mapStateToProps = ({ user: { isAuth } }) => {
//     return {
//         isAuth
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         logOut: () => dispatch(logOut())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Header)
