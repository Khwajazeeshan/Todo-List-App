import React from 'react'
import { useState, useEffect } from 'react'
import '../Style/Data.css'
import axios from 'axios'

const Data = () => {
    const [todos, setTodos] = useState([]) // Initialize todos state


    useEffect(() => {
        axios.get('http://localhost:3000/get')
            .then(result => setTodos(result.data)) // Update todos state
            .catch(err => console.log(err))
    }, [])

    const handleClick = (id) => {
        axios.put(`http://localhost:3000/update/${id}`) // Use template literal
            .then(result => {
                location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleEdit = (task) => {
        const oldtask = task;
        const Newtask = prompt("Enter Todo"); // Prompt default to old task

        if (Newtask.trim() === "") {
            alert("Task cannot be empty");
            return;
        }

        axios.put("http://localhost:3000/edit", { oldtask, Newtask })
            .then(result => {
                location.reload();
            })
            .catch(err => console.log("Error updating task:", err));
    };


    const handleDelete = (id) => {
        if (window.confirm("Delete This Todo ?")) {
            axios.delete(`http://localhost:3000/delete/${id}`)
                .then(result => {
                    location.reload()
                })
                .catch(err => console.log(err))
        }
    }

    // Calculate stats
    const totalTasks = todos.length;
    const completedTasks = todos.filter(todo => todo.done).length;
    const pendingTasks = totalTasks - completedTasks;

    return (
        <div className='data'>
            {todos.length === 0
                ?
                <div className='empty-state'>
                    <div className='empty-icon'>📝</div>
                    <p className='para'>No Tasks Yet</p>
                    <p className='empty-subtitle'>Start adding tasks to organize your day!</p>
                </div>
                :

                <div style={{ width: '100%', maxWidth: '700px' }}>
                    {/* Stats Section */}
                    <div className='stats-container'>
                        <div className='stat-item'>
                            <span className='stat-value'>{totalTasks}</span>
                            <span className='stat-label'>Total</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-value'>{completedTasks}</span>
                            <span className='stat-label'>Completed</span>
                        </div>
                        <div className='stat-item'>
                            <span className='stat-value'>{pendingTasks}</span>
                            <span className='stat-label'>Pending</span>
                        </div>
                    </div>
                    <br />
                    <div className='Todos'>
                        {todos.map(todo => (
                            <div className='section' key={todo._id}> {/* Changed key from todo to todo._id */}
                                <div className='todo'>
                                    <div className='todo-data'>
                                        <span className='checkbox-wrapper' onClick={() => handleClick(todo._id)}>
                                            <input type="checkbox" checked={todo.done} readOnly />
                                        </span>
                                        <span className={`todo-text ${todo.done ? "line_through" : ""}`}>
                                            {todo.task}
                                        </span>
                                    </div>
                                    <div className='svg'>
                                        <div className="action-btn edit-btn" onClick={() => handleEdit(todo.task)}>
                                            <span className="material-symbols-outlined">edit</span>
                                        </div>
                                        <div className="action-btn delete-btn" onClick={() => handleDelete(todo._id)}>
                                            <span className="material-symbols-outlined">delete</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            }
        </div>
    )
}

export default Data
