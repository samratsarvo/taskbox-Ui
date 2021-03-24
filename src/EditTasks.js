import React from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const EditTasks = (props) => {
    const { id, title, status, editItem, handleToggle } = props

    const formSubmit = (task) => {
        axios.put(`http://localhost:3033/api/tasks/${task.id}`, task)
        .then((response)=> {
            const result = response.data
            editItem(result)
            handleToggle()
        })
        .catch((err)=> {
            alert(err.message)
        })
    }

    return (
        <div>
            <h2>EditTask</h2>
            <TaskForm id={id} title={title} status={status} formSubmit={formSubmit}/>
        </div>
    )
}

export default EditTasks