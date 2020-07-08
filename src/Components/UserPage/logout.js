import React from 'react'
import {Redirect} from 'react-router-dom'

const logout = () => {
    return (
        <div>
            <Redirect to="/log"/>
        </div>
    )
}

export default logout