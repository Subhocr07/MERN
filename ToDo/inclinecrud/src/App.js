import { useState } from "react";

// custom components
import CustomForm from "./components/CustomForm";
import Tasklist from "./components/TaskList";
import EditForm from "./components/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [previousFocusEl,setPreviousFocusEl] = useState(null);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
    // setTasks(prevState => [...prevState, task])//another process
  };

  const deleteTask = (id) => {
    let retainedTask = tasks.filter((index) => index.id !== id);
    setTasks(retainedTask);
  };

  const updateTask = (task) => {
    let editeditem = tasks.map((item) =>
      item.id === task.id ? { ...item, name: task.name } : item
    );
    setTasks(editeditem);
    //close the edit mode
   closeEditMode();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl.focus()
    //return focus to previous state
  }

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} closeEditMode={closeEditMode} />
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updateTask} />
      )}
      {tasks && (
        <Tasklist
          tasks={tasks}
          deleteTask={deleteTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
}

export default App;
