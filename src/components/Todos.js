import { useState } from "react";
import Todo from "./Todo";

const Todos = ({ todoItems }) => {
  // const [allTasks, setAllTasks] = useState(todoItems);
  // const [activeTasks, setActiveTasks] = useState([]);

  // setActiveTasks(allTasks.filter((x) => x.isActive === true));

  // const todoClickHandler = (task) => {
  //   return () => {
  //     const a = todoItems(allTasks.filter((x) => x !== task.task));
  //     todoItems = [...a];
  //   };
  // };

  const statusHandler = (currentItem) => {
    currentItem = { ...currentItem, isActive: !currentItem.isActive };

    todoItems = { ...todoItems };
  };

  if (todoItems.length <= 0) return <div>No Tasks added so for</div>;
  return (
    <div>
      {todoItems.map((el) => (
        <div>
          <Todo task={el} />
        </div>
      ))}
    </div>
  );
};

export default Todos;
