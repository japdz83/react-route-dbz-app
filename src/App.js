import React, { useEffect, useReducer } from "react";
import "./App.css";
import LoginRouters from "./routes/LoginRouters";
import { AuthContext } from "./context/AuthContext";
import { AuthReducers } from "./reducers/AuthReducers";

const init = () => {
  return JSON.parse(localStorage.getItem("log")) || { log: false };
};

function App() {
  const [log, dispatch] = useReducer(AuthReducers, {}, init);

  useEffect(() => {
    localStorage.setItem("log", JSON.stringify(log));
  }, [log]);

  return (
    <AuthContext.Provider value={{ log, dispatch }}>
      <LoginRouters />
    </AuthContext.Provider>
  );
}

export default App;
