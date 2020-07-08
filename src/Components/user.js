import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav'
import UserPage from './UserPage/UserPage'
import {Route, Switch,NavLink} from 'react-router-dom'

import './user.css'

const User=()=>{
    
    return(
        <div>
            <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item class="nav">
                <NavLink to="/user" ><a>User</a></NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/tasks" ><a>Tasks</a></NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink to="/logout" ><a>Logout</a></NavLink>
            </Nav.Item>
            </Nav>
        </div>
    )
}

export default User;