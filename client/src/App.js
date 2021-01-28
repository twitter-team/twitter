import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ScrollableTabsButtonAuto from './Components/horizantalTab/horizantalTab'
import Profile from "./Components/Profile/profile"
import Chat from "../src/Components/Chat/Chat"
import { loadUser } from './Redux/user/userAction'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import Welcome from './Components/Welcome/Welcome.jsx'
import './App.css';

const App = ({ loadUser,isAuth }) => {

  useEffect(() => {
    loadUser()
    
  }, [])


  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <ScrollableTabsButtonAuto />} />
        <Route exact path="/welcome" render={() => 
        isAuth
        ? (<Redirect to='/' />)
        : (<Welcome />)} />
        
        <Route exact path="/chat" render={() =>
          !isAuth
            ? (<Redirect to='/welcome' />)
            : (<Chat />)} />
        <Route exact path="/profile" render={() =>
          !isAuth
            ? (<Redirect to='/welcome' />)
            : (<Profile />)} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () => dispatch(loadUser())
  }
}
const mapStateToProps =({user:{isAuth}})=>{
  return{
    isAuth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
