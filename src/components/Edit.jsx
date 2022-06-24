import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { updateTodo } from "../store/todo/todo.action";
import { useDispatch } from "react-redux";

const Edit = () => {
  const { id } = useParams();
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const updateHandler = () => {
    updateTodo(id, val, dispatch);
  };
  return (
    <div>
      <input
        placeholder="type here..."
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={updateHandler}>Update todo</button>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Edit;
