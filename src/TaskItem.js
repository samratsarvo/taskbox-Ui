import React, { useState } from 'react'
import EditTasks from './EditTasks'
import axios from 'axios'


const TaskItem = (props) => {
    const [toggle,setToggle] = useState(false)
    const { id, title, status, removeItem, editItem } = props

    const handleToggle = () => {
        const result = !toggle
        setToggle(result)
    }

    const handleRemove = (id) => {
        const confirmRemove = window.confirm('Are you sure')
        if(confirmRemove) {
            axios.delete(`http://localhost:3033/api/tasks/${id}`)
            .then((response) => {
                const result = response.data
                removeItem(result.id)
            })
            .catch((err) => {
                alert(err.message)
            })
        }
    }

    return (
        <div>
            {
                toggle ? ( 
                <div>
                    <EditTasks id={id} title={title} status={status} editItem={editItem} handleToggle={handleToggle}/>
                    <button onClick={handleToggle}>cancel</button>               
                </div>
                    
                ) : (
                    <div>
                        <h3> { title } </h3>
                        <button onClick={handleToggle}>edit</button>
                        <button onClick={()=> {
                        handleRemove(id)
                        }}>remove</button>
                    </div>
                )
            }
        </div>
    )
}

export default TaskItem