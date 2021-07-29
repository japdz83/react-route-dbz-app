import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { authTypes } from "../types/authTypes";

const LoginScreen = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    dispatch({ type: authTypes.login });
    history.push("/mans");
  };
  return (
    <div className="container mt-5 text-center">
      <img src="/assets/animate.gif" alt="Img-SonGoku" />
      <h1 className="m-3">Login Screen</h1>
      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
