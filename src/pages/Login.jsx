import React, { useState, useEffect } from "react";
import { loginAPI } from "../store/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);

  const changeHandler = (e) => {
    let { name, value } = e.target;
    setCreds({
      ...creds,
      [name]: value,
    });
  };
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  const submitHandler = (e) => {
    e.preventDefault();
    loginAPI(creds, dispatch);
  };

  return (
    <div>
      <h1>login page</h1>
      <form onSubmit={submitHandler}>
        <input placeholder="email" name="email" onChange={changeHandler} />
        <input
          placeholder="password"
          name="password"
          onChange={changeHandler}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
