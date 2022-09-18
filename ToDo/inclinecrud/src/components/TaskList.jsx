import React from 'react';
import TaskItem from '../components/TaskItem.jsx';

const Tasklist = ({tasks,deleteTask,enterEditMode}) => {
  return (
      <ul className='tasks'  keys={tasks.id}  >
            {
                tasks.map((task) =>
                <TaskItem 
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                enterEditMode={enterEditMode}
                />
                )
            }
      </ul>
  )
}

export default Tasklist
