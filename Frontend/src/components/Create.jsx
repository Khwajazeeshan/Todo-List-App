import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../Style/Create.css'

const create = () => {
    const [task, setTask] = useState("")

    const HandleClick = () => {
        if (!task.trim()) {
            alert("Please enter a task before adding.");
            return;
        }

        axios.post('http://localhost:3000/add', { task: task })
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            HandleClick();
        }
    };



    return (
        <div className='create'>
            <div className='create-container'>
                <div className='input-wrapper'>
                    <input
                        type="text"
                        name="text"
                        placeholder='Enter your task...'
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <span className='input-icon'>✏️</span>
                </div>
                <button onClick={HandleClick}>
                    Add Task
                    <span className='button-icon'>→</span>
                </button>
            </div>
        </div>
    )
}

export default create
