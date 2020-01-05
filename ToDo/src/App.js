import React, { useState, useMemo } from "react";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import Navbar from "./components/Navbar";

const App = () => {
  // STATE
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [task_bgColor, setTask_bgColor] = useState("rgb(241, 109, 106)");
  const [editingTask, setEditingTask] = useState(false);

  // FUNCTIONS
  const handleInputChange = e => setInputValue(e.target.value);
  const changeColor = color => () => setTask_bgColor(color);
  
  const completeTask = id => () => {
    let changedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(changedTasks);
  };

  const removeTask = _id => () => {
    setTasks(pTasks => pTasks.filter(({ id }) => id !== _id));
  };
  
  const editTask = _id => () => {
    let modifiedTasks = tasks.map(task =>
      task.id === _id ? { ...task, isEditing: true } : task 
    );

    let { value: taskValue } = tasks.find(({ id }) => id === _id);
    setInputValue(pValue => pValue + taskValue);
    setTasks(modifiedTasks);
    setEditingTask(true);
  };

  const addTask = e => {
    e.preventDefault();

    //while editing
    if (editingTask) {
      let modifiedTasks = tasks.map(task =>
        task.isEditing ? { ...task, value: inputValue, bg: task_bgColor } : task
      );

      setTasks(modifiedTasks);
      setInputValue("");
      return setEditingTask(false);
    }

    //while adding
    if (inputValue && !!inputValue.trim()) {
      let newTask = {
        value: inputValue,
        id: Math.round(Math.random() * 1000000),
        bg: task_bgColor,
        completed: false,
        isEditing: false
      };

      setInputValue("");
      setTasks(pTasks => [newTask, ...pTasks]);
    }
  };

  //  MEMORIZED COMPONENT
  const navbarMemo = useMemo(
    //only for learning purposes useMemo was used
    () => <Navbar color={task_bgColor}>Todo List With Hooks</Navbar>,
    [task_bgColor]
  );

  return (
    <div className="container">
      {navbarMemo}
      <TodoList
        completeTask={completeTask}
        removeTask={removeTask}
        editTask={editTask}
        tasks={tasks}
      />
      <InputField
        addTask={addTask}
        handleChange={handleInputChange}
        changeColor={changeColor}
        inputValue={inputValue}
        task_bgColor={task_bgColor}
      />
    </div>
  );
};

export default App;
