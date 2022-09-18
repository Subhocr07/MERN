import React,{useState} from 'react'

const TaskItem = ({task,deleteTask,enterEditMode}) => {
  //to enable the checkbox functionality we have to add a state
  const [isChecked,setIsChecked]=useState(task.checked)
  const handleCheckBoxChange=(e)=>{
    setIsChecked(!isChecked)
  }
  return (
    <li className="task">
        <div className="task-group" >
            <input 
            type="checkbox" 
            checked={isChecked}
            id={task.id}
            name={task.name}
            onChange={handleCheckBoxChange}
            />
            <label htmlFor={task.id}
            >{task.name}</label>
            <button
             onClick={()=>enterEditMode(task)} 
             >
              Edit
              </button>
            <button
             onClick={()=>deleteTask(task.id)} 
             >
              Delete
              </button>
        </div>
    </li>
  )
}

export default TaskItem
