import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from "./auth.types";
import axios from "axios";

export const loginAPI = (creds, dispatch) => {
    dispatch({ type: LOGIN_LOADING });
    axios.post("https://reqres.in/api/login", creds)
        .then(res => {
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
            console.log(res.data.token);
        })
        .catch(e => {
            dispatch({ type: LOGIN_FAILURE, payload: e })
        })
}