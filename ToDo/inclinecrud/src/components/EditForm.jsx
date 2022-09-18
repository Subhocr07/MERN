import { useState } from "react";

const EditForm = ({ editedTask,updateTask,closeEditMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({...editedTask,name:updatedTaskName});
  };

  return (
    <div onClick={(e)=>e.target===e.currentTarget && closeEditMode()} >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="EditTask" className="label">      
            update Task
          </label>
        </div>
        <button className="btn" aria-label="Add Task" type="submit">
          Update Task
        </button>
      </form>
    </div>
  );
};
export default EditForm;
