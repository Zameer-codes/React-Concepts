import { useEffect, useRef } from "react";
import { useState } from "react";

export const ToDoList = () => {
    const addTaskRef = useRef(null);
    const [tasks, setTasks] = useState([]);

    function handleAddingNewTask(e) {
        setTasks(prevTasks => [...prevTasks, addTaskRef.current.value]);
    };

    useEffect(() =>{
        function handleInputChange(e) {
            console.log('event triggered');
        };

        const inputNode = addTaskRef.current;
        inputNode.addEventListener('input', handleInputChange);
        return()=>{
            inputNode.removeEventListener('input', handleInputChange);
        };
    },[]);
    return (
        <>
            <h3>To Do List</h3>
            <input ref={addTaskRef} placeholder="new task" type="search"/>
            <button onClick={handleAddingNewTask}>Add To List</button>
            <ul>
                {
                    tasks && tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))
                }
            </ul>
        </>
    )
}