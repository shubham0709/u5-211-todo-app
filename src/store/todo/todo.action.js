import {
    GET_TODOS_LOADING,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILURE,
    ADD_NEW_TODO
} from "./todo.types";
import axios from "axios";

export const addTodo = (payload) => {
    axios.post("http://localhost:8080/todos", payload)
        .then(res => res)
        .catch(e => e);
    return { type: ADD_NEW_TODO, payload: payload }
}

export const fetchTodos = (dispatch) => {
    dispatch({ type: GET_TODOS_LOADING });
    axios.get("http://localhost:8080/todos")
        .then(res => {
            dispatch({ type: GET_TODOS_SUCCESS, payload: res.data })
        })
        .catch(e => {
            dispatch({ type: GET_TODOS_FAILURE, payload: e })
        })
}