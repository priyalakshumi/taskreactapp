import React from 'react'
import axiosinstance from '../../axios'
import {useHistory} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {createuser, iserror} from '../../store/actions'
import {useForm} from 'react-hook-form'
import {Form,Button,Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import './login.css'
const LogIn = (props) => {

    const userstate = useSelector(state => state);

    const history = useHistory()

    const dispatch = useDispatch()

    const {handleSubmit, register, errors} = useForm()

    const onSubmit = async (data) => {
        console.log(data)
        try{
            const data1=await axiosinstance.post('/users/login', data)
            dispatch(createuser(data1.data))
            console.log(history)
            history.push("/user")
        }
        catch(ex){
            dispatch(iserror())
        }
    }
    return(
        <div className="login">
        <h1>Login</h1>
        {userstate.iserror === true? <div class="alert alert-danger" role="alert">
                                        Incorrect username or password
                                    </div>
        : null }
        <Card className="form-image">
            <Form method="post" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" ref={register}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" ref={register}/>
            </Form.Group>
            <Button id="button3" variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </Card>
        {/* <form method="post" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="email" placeholder="Username" required="required" ref={register}/>
            <input type="password" name="password" placeholder="Password" required="required" ref={register} />
            <button type="submit" class="btn btn-primary btn-block btn-large">LogIn</button>
        </form> */}
        </div>
        
    )
}

export default LogIn;