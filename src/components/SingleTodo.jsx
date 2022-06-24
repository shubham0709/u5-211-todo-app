import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSingleTodo } from "../store/todo/todo.action";
import { useDispatch, useSelector } from "react-redux";

const SingleTodo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isCompleted } = useSelector((state) => state.todo.singleTodo);

  useEffect(() => {
    getSingleTodo(id, dispatch);
  }, []);

  return (
    <div>
      todoID : {id}
      {data ? (
        <div>
          <div>todo : {data}</div>
          <div>Completed : {isCompleted ? "YES" : "NO"}</div>
          <Link to={`/todo/${id}/edit`}>edit</Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SingleTodo;
