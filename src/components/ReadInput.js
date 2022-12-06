import { Button } from "react-bootstrap";
import React, { useState } from "react";
import Todos from "./Todos";
import Base from "./Base";

const ReadInput = () => {
  /*const defaultState = {
    task: "",
    isActive: false,
  };*/
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const clickHandler = () => {
    if (task.trim() === "") {
      alert("Task is mandatory");
      return;
    }

    const item = { task: task.trim(), isActive: true };

    let temp = [...todos];
    temp = [...temp, item];
    setTodos(temp);
    setTask("");
  };

  const toggleTaskStatus = (task) => {
    todos.map((el) =>
      el.task === task.task
        ? { ...todos, isActive: !el.isActive }
        : { ...todos }
    );
  };

  return (
    <div
      className="d-flex align-items-center my-3"
      style={{ display: "block" }}
    >
      <input
        type="text"
        placeholder="Enter Task"
        maxLength="20"
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <Button className="btn btn-primary mx-3" onClick={clickHandler}>
        Add Task
      </Button>
      <Todos todoItems={todos} statusHandler={toggleTaskStatus} />
    </div>
  );
};

export default ReadInput;
