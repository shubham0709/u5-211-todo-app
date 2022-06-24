import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import {
  addTodo,
  fetchTodos,
  markComplete,
  removeTodo,
} from "../store/todo/todo.action";
import style from "./Todo.module.css";

const Todo = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  const changeHandler = (e) => {
    setVal(e.target.value);
  };

  const addHandler = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        data: val,
        isCompleted: false,
      })
    );
  };

  const removeHandler = (id) => {
    removeTodo(id, dispatch);
  };

  const completeHandler = (todo) => {
    markComplete(todo, dispatch);
  };

  useEffect(() => {
    fetchTodos(dispatch);
  }, []);

  return (
    <div>
      <input placeholder="type here..." onChange={changeHandler} />
      <button onClick={addHandler}>Add</button>
      {todos.map((elem, i) => (
        <div key={i}>
          <Link to={`/todo/${elem.id}`}>{elem.data}</Link>
          <button onClick={() => removeHandler(elem.id)}>Remove</button>
          <button
            onClick={() => completeHandler(elem)}
            className={elem.isCompleted ? style.dashed : style.none}
          >
            {elem.isCompleted ? "Mark as incomplete" : "mark as complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
