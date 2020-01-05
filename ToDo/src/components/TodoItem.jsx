import React, { useState } from "react";

const TodoItem = ({
  value,
  bg: background,
  id,
  completed,
  edit,
  complete,
  remove
}) => {
  // STATE
  const [opacity, setOpacity] = useState(1);
  const [transform, setTransform] = useState("translate(0%,0%) scale(1,1)");

  // VARIABLES
  const completeIconStyle = completed ? { opacity: "1", fontSize: 25 } : {};
  const taskStyle = {
    textDecoration: `${completed ? "line-through grey" : "none"}`
  };

  // FUNCTIONS
  const rndBiggerThan = (num = 0.5) => Math.random() > num;
  const removeTaskAfterEffect = id => () => {
    // Making random effect
    if (rndBiggerThan(0.6)) {
      rndBiggerThan()
        ? setTransform(`scale${rndBiggerThan() ? (1, 0.0001) : (0.0001, 1)}`)
        : setOpacity(0);
    } else {
      setTransform(`translate(${rndBiggerThan() ? "-" : ""}200%,0)`);
    }

    setTimeout(remove(id), 300);
  };

  return (
    <div style={{ transform, opacity }} className="todoItem">
      <div style={{ background }} className="checkbox-parent ">
        <i
          className="fa fa-check"
          style={completeIconStyle}
          onClick={complete(id)}
        ></i>
      </div>
      <div style={{ background }} className="task skyblue">
        <i onClick={removeTaskAfterEffect(id)} className="fa fa-close "></i>
        <i onClick={edit(id)} className="fa fa-edit"></i>
        <h3 style={taskStyle}>{value}</h3>
      </div>
    </div>
  );
};

export default TodoItem;
