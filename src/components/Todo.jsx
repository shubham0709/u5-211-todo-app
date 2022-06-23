import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { addTodo, fetchTodos } from "../store/todo/todo.action";

const Todo = () => {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);
  console.log(todos);

  const changeHandler = (e) => {
    setVal(e.target.value);
  };

  const addHandler = () => {
    dispatch(
      addTodo({
        data: val,
        isCompleted: false,
      })
    );
  };

  useEffect(() => {
    fetchTodos(dispatch);
  }, []);

  return (
    <div>
      <input placeholder="type here..." onChange={changeHandler} />
      <button onClick={addHandler}>Add</button>
      {todos.map((elem, i) => (
        <div key={i}>{elem.data}</div>
      ))}
    </div>
  );
};

export default Todo;
