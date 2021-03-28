import React, { Component } from 'react';
import Task from "./task";

function TaskList(props){
    return (
    <React.Fragment>
        {props.tasks.map((task,id) => (
            <Task 
             key={id} 
             id={id}
             handleDelete={props.handleDelete}
             value={task}
            />
        ))}
    </React.Fragment>
    )
}
export default TaskList;