import React from 'react'
import {Link} from 'react-router-dom'
import {Form,Button,Card } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import axiosinstance from '../../axios'
import './signin.css'

const SignIn = (props) => {

    const {handleSubmit, register, errors} = useForm()

    const onSubmit = (data) => {
        console.log(data)
        axiosinstance.post('/users', data)
        .then((resolve) => {
            console.log("UserCreated")
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div className="login">
        <h1>SignUp</h1>
        <Card className="form-image1">
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" placeholder="Enter name" ref={register}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" ref={register}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" ref={register}/>
        </Form.Group>
        <Link to="/log">
        <Button id="button4" variant="primary" type="submit">
            Submit
        </Button>
        <p>Already Have an Account? LogIn</p>
        </Link>
        </Form>
        </Card>
        {/* <form method="post" onSubmit={handleSubmit(onSubmit)}> 
            <input type="text" name="name" placeholder="Name" required="required" ref={register}/>
            <input type="text" name="email" placeholder="Email" required="required" ref={register}/>
            <input type="password" name="password" placeholder="Password" required="required" ref={register}/>
            <button type="submit" class="btn btn-primary btn-block btn-large">SignUp</button>
        </form> */}
        </div>
    )
}

export default SignIn;