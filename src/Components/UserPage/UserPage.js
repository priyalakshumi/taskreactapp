import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './userpage.css'
import { useSelector } from 'react-redux';
import User from '../user'
const UserPage = () => {

    const userstate = useSelector(state => state);

    return(
        <div>
            <User/>
        <Card className="card-image2">
        <Card.Body>
            <Card.Title className="card-title">User Details</Card.Title>
            <Card.Text className="card-text">
                Name: {userstate.user.name}
            </Card.Text>
            <Card.Text>
                Email: {userstate.user.email}
            </Card.Text>
            <Card.Text>
                Account CreatedAt: {userstate.user.createdAt}
            </Card.Text>
            <Card.Text>
                Account UpdatedAt: {userstate.user.updatedAt}
            </Card.Text>
        </Card.Body>
        </Card>
        </div>
    )
}

export default UserPage