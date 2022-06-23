import { legacy_createStore, combineReducers } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { todoReducer } from './todo/todo.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

export const store = legacy_createStore(rootReducer);