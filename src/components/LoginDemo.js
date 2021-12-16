import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Auth } from "aws-amplify";

function LoginDemo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    Auth.signIn(username, password)
      .then(() => {
        setIsAuthenticated(true);
      })
      .catch(() => alert("login failed"));
  };

  const handleRegister = (username, password) => {
    Auth.signUp({
      username,
      password,
    })
      .then(() => {
        alert("Register Succesful");
      })
      .catch(() => alert("Register Failed"));
  };

  return isAuthenticated ? (
    "User is Authenticated"
  ) : (
    <>
      <LoginForm handleSubmit={handleLogin} />
      <RegisterForm handleSubmit={handleRegister} />
    </>
  );
}

export default LoginDemo;
