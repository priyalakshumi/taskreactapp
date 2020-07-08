import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './taskItem.css'
const TaskItem = (props) => {
    return(
        <div>
            {console.log("hello")}
            <Card className="card-image">
                <Card.Body className="card-body">Task: {props.description} 
                                    <button type="submit" id="button1" class="btn btn-danger" onClick={() => props.remove(props.description)}>Remove</button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default TaskItem;