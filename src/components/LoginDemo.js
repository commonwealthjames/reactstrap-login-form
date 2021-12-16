import React, { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { Auth } from "aws-amplify";
import { configureAmplify } from "../functions/init";

function LoginDemo() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function refreshAmplifySession() {
    // Make sure amplify is all configured and setup
    configureAmplify();
    Auth.currentSession().catch((err) => {
      setIsAuthenticated(false);
    });
  }

  useEffect(() => {
    const amplifyRefreshIntervalTimer = setInterval(() => {
      refreshAmplifySession();
    }, 30 * 60 * 1000); // Refresh the token every 30 minutes

    return () => {
      clearInterval(amplifyRefreshIntervalTimer);
    };
  });

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

  const handleLogout = (event) => {
    event.preventDefault();
    Auth.signOut()
      .then(() => {
        setIsAuthenticated(false);
      })
      .catch(() => alert("Logout Failed"));
  };

  return isAuthenticated ? (
    <>
      <div>User Is Authenticated</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  ) : (
    <>
      <LoginForm handleSubmit={handleLogin} />
      <RegisterForm handleSubmit={handleRegister} />
    </>
  );
}

export default LoginDemo;
