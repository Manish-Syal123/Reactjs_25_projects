import { useEffect, useState } from "react";
import "./dragdrop.css";

const DragDrop = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const fetchListOfTodos = async () => {
    try {
      setLoading(true);
      const apiResponse = await fetch(
        "https://dummyjson.com/todos?limit=5&skip=0"
      );
      const result = await apiResponse.json();

      if (result && result.todos && result.todos.length > 0) {
        setLoading(false);
        const updatedTodos = result.todos.map((todoItem) => ({
          ...todoItem,
          status: "wip", // wip => work in progress
        }));

        setTodos(updatedTodos);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  console.log(todos);

  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const onDrop = (event, status) => {
    const id = event.dataTransfer.getData("id");
    console.log("id: ", id);
    let updateTodos = todos.filter((todoItem) => {
      if (todoItem.id.toString() === id) {
        todoItem.status = status;
      }
      return todoItem;
    });

    setTodos(updateTodos);
  };
  const renderTodos = () => {
    const todoListToRender = {
      wip: [],
      completed: [],
    };

    todos.forEach((todoItem) => {
      todoListToRender[todoItem.status].push(
        <div
          draggable
          onDragStart={(event) => onDragStart(event, todoItem.id)}
          key={todoItem.id}
          className="todo-card"
        >
          {todoItem.todo}
        </div>
      );
    });

    return todoListToRender;
  };

  if (loading) return <h1>Loading data! Please wait</h1>;

  return (
    <div className="drag-and-drop-container">
      <h1>Drag and Drop</h1>
      <div className="drag-and-drop-board">
        {/* In progress task section */}
        <div
          onDrop={(event) => onDrop(event, "wip")}
          onDragOver={(event) => event.preventDefault()}
          className="work-in-progress"
        >
          <h3>In progress</h3>
          <div className="todo-list-wrapper">{renderTodos().wip}</div>
        </div>

        {/* Completed task section */}
        <div
          onDrop={(event) => onDrop(event, "completed")}
          onDragOver={(event) => event.preventDefault()}
          className="completed"
        >
          <h3>Completed</h3>
          <div className="todo-list-wrapper">{renderTodos().completed}</div>
        </div>
      </div>
    </div>
  );
};

export default DragDrop;
