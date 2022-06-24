import { legacy_createStore, combineReducers } from 'redux';
import { counterReducer } from './counter/counter.reducer';
import { todoReducer } from './todo/todo.reducer';
import { authReducer } from './auth/auth.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
    auth: authReducer
})

export const store = legacy_createStore(rootReducer);