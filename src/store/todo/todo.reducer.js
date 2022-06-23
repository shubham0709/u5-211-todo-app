import {
    GET_TODOS_LOADING,
    GET_TODOS_SUCCESS,
    GET_TODOS_FAILURE,
    ADD_NEW_TODO
} from "./todo.types";

const initialState = {
    todos: [],
    loading: false,
    success: false,
    failure: false
}
export const todoReducer = (state = initialState, action) => {
    const { type, payload } = action;
    console.log(payload);
    switch (type) {
        case ADD_NEW_TODO: {
            console.log("adding");
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
                ...state, todos: [...state.todos, ...payload],
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
        default: {
            return state;
        }
    }
}