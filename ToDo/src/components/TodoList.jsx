import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, completeTask, removeTask, editTask }) =>
  tasks.map(task => (
    <TodoItem
      className="isActive"
      {...task}
      key={task.id}
      complete={completeTask}
      remove={removeTask}
      edit={editTask}
    />
  ));

export default TodoList;
