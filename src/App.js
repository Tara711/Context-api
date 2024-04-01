import React from "react";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <h1>Hello, </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
