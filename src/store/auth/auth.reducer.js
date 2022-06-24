import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./auth.types";
import { loadData, saveData } from "../../utils/localStorage";
const initialState = {
    isAuth: loadData("isAuth") || false,
    loading: false,
    error: false,
    token: ""
}

export const authReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case LOGIN_LOADING: return {
            isAuth: false,
            loading: true,
            error: false,
            token: ""
        }
        case LOGIN_SUCCESS: {
            // console.log(payload);
            saveData("isAuth", true);
            return {
                isAuth: true,
                loading: false,
                error: false,
                token: payload
            }
        }
        case LOGIN_FAILURE: return {
            isAuth: false,
            loading: false,
            error: true,
            token: ""
        }
        default: return { ...state }
    }
}