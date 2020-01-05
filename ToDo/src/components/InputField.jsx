import React from "react";

const InputField = ({
  handleChange,
  addTask,
  changeColor,
  inputValue,
  task_bgColor,
  editingTask
}) => {

  let colors = [
    "rgb(94, 178, 246)",
    "rgb(241, 109, 106)",
    "rgb(242, 121, 162)",
    "rgb(128, 128, 255)",
    "rgb(104, 215, 229)",
    "rgb(238, 193, 58)"
  ];

  return (
    <div className="inputField">
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Add a New Task..."
          value={inputValue}
          onChange={handleChange}
        />
        <input id="btn" type="submit" value={editingTask ? "Edit" : "Add"} />
      </form>
      <div className="colors">
        {colors.map(color => (
          <div
            key={Math.random()}
            style={{ background: color }}
            onClick={changeColor(color)}
            className={task_bgColor === color ? "isActive" : ""}
          ></div>
        ))}
      </div>
    </div>
  );
};



export default InputField;
