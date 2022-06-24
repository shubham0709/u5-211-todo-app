import {
    GET_TODOS_LOADING,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILURE,
    ADD_NEW_TODO,
    REMOVE_TODO,
    MARK_AS_COMPLETE,
    GET_SINGLE_TODO,
    UPDATE_TODO
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

export const removeTodo = (id, dispatch) => {
    axios.delete(`http://localhost:8080/todos/${id}`)
        .then(res => {
            dispatch({ type: REMOVE_TODO, payload: id })
        })
        .catch(e => {
            console.log(e);
        })
}

export const markComplete = (todo, dispatch) => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted }
    axios.patch(`http://localhost:8080/todos/${todo.id}`, updatedTodo)
        .then(res => {
            dispatch({ type: MARK_AS_COMPLETE, payload: todo.id })
        })
        .catch(e => {
            console.log(e);
        })
}

export const getSingleTodo = (id, dispatch) => {
    axios.get(`http://localhost:8080/todos/${id}`)
        .then(res => {
            dispatch({ type: GET_SINGLE_TODO, payload: res.data })
        }).catch(e => {
            console.log(e);
        })
}

export const updateTodo = (id, val, dispatch) => {
    axios.patch(`http://localhost:8080/todos/${id}`, { data: val })
        .then(res => {
            console.log("===========", res.data);
            dispatch({ type: UPDATE_TODO, payload: res.data });
        })
        .catch(e => {
            console.log(e);
        })
}