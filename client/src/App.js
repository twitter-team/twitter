import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import ScrollableTabsButtonAuto from './Components/horizantalTab/horizantalTab'
import { loadUser } from './Redux/user/userAction'

import './App.css';

const App = ({loadUser}) => {

  useEffect(() => {
    loadUser()
  },[])


  return (
    <div className="App">
      <ScrollableTabsButtonAuto />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return{
    loadUser : () => dispatch(loadUser())
  }
}

export default connect(null,mapDispatchToProps)(App);
