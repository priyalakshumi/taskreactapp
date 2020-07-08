import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Route,Switch,Redirect, useHistory} from 'react-router-dom'
import LogIn from './Components/LogIn/LogIn';
import SignIn from './Components/SignUp/SignIn'
import User from './Components/user'
import { useSelector } from 'react-redux';
import Tasks from './Components/UserPage/tasks'
import UserPage from './Components/UserPage/UserPage'
import Logout from './Components/UserPage/logout'
const Router=(props)=>{

  const userstate = useSelector(state => state);
  
    const PrivateRoute=({children, ...rest}) => (
        <Route {...rest} render = {() => (
          userstate.isLogged===true?<UserPage/>:<Redirect to="/"/>
      )}/>
    )

    return(
        <BrowserRouter>
        <Route path="/tasks" >
                <Tasks/>
            </Route>
            <Route path="/logout" >
                <Logout/>
            </Route>
          <PrivateRoute path="/user" >
            <UserPage/>
          </PrivateRoute>
          <Route path="/log">
            <LogIn/>
          </Route>
          <Route path="/" exact>
            <SignIn/>
          </Route>
        </BrowserRouter>
    )
}
    


export default Router