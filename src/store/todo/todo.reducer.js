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

const initialState = {
    todos: [],
    loading: false,
    success: false,
    failure: false,
    singleTodo: {}
}
export const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_NEW_TODO: {
            return { ...state, todos: [...state.todos, payload] }
        }
        case GET_TODOS_LOADING: {
            return {
                ...state,
                loading: true,
                success: false,
                failure: false
            }
        }
        case GET_TODOS_SUCCESS: {
            return {
                ...state, todos: [...payload],
                loading: false,
                success: true,
                failure: false
            }
        }
        case GET_TODOS_FAILURE: {
            return {
                ...state,
                loading: false,
                success: false,
                failure: true
            }
        }
        case REMOVE_TODO: {
            let temp = state.todos.filter(x => {
                return x.id !== payload;
            })
            return { ...state, todos: temp }
        }
        case MARK_AS_COMPLETE: {
            state.todos.forEach((x, i) => {
                if (x.id === payload) {
                    x.isCompleted = !state.todos[i].isCompleted;
                }
            })
            return { ...state }
        }
        case GET_SINGLE_TODO: {
            return { ...state, singleTodo: payload }
        }
        default: {
            return state;
        }
    }
}