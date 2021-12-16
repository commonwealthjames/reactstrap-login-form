import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function LoginForm({ handleSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log({ username, password });
  });

  const handleLogin = (event) => {
    event.preventDefault();
    handleSubmit(username, password);
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login-form">
      <h2>Login Form</h2>
      <Form className="form" onSubmit={handleLogin}>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            type="email"
            name="email"
            id="username"
            placeholder="example@example.com"
            onChange={handleUserNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default LoginForm;
