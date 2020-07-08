import React, { useState, Fragment, useEffect } from 'react'
import {useForm} from 'react-hook-form'
import axiosinstance from '../../axios'
import TaskItem from './taskItem'
import {Form,Button,Card } from 'react-bootstrap'
import './tasks.css'
import { useSelector } from 'react-redux';
import User from '../user'
const Tasks = () => {

    const userstate = useSelector(state => state);

    const [usetasks, settasks] =useState({
        tasks: [],
        got: false,
        a: false
    })

    const {handleSubmit, register, errors} = useForm()

    const onSubmit = async (data) => {
        console.log(userstate.token)
        axiosinstance.post('/tasks', data)
        .then((resolve) => {
            console.log(resolve)
            settasks({
                ...usetasks,
                a:true
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    axiosinstance.defaults.headers.common['Authorization'] = userstate.token

    const gettasks = async () =>{
        const arr=[]
        const  tasklist = await axiosinstance.get('/tasks')
        tasklist.data.map((each) => {arr.push(each)})
        settasks({
            ...usetasks,
            tasks: arr,
            got:true
        })
    }

    useEffect(() => {
        gettasks()
}, [usetasks.a])


const remove = (data) => {

    const arr1 = usetasks.tasks.filter((task) => task.description!==data)
    settasks({
        ...usetasks,
        tasks: arr1
    })
    console.log(data)
}

    return(
        <Fragment>
            <User/>
            <h5>Wanna Add Task</h5>
            <Card className="card-image1">
                <Form method="post" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Task Description</Form.Label>
                    <Form.Control type="description" name="description" placeholder="Enter description" ref={register}/>
                </Form.Group>

                <Button id="button2" variant="primary" type="submit">
                    Add Task
                </Button>
                </Form>
            </Card>

            <h5>Your Tasks</h5>
            {usetasks.got === true? usetasks.tasks.map((task) => <TaskItem description={task.description} completed={task.completed} remove={(data) => {remove(data)}}/>): console.log("nothing")}
            
         </Fragment>
    )
}

export default Tasks