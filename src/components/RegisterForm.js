import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function RegisterForm({ handleSubmit }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (event) => {
    if (password === confirmPassword) {
      event.preventDefault();
      handleSubmit(username, password);
    } else {
      alert("Passwords don't match");
    }
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <div className="register-form">
      <h2>Registration Form</h2>
      <Form className="form" onSubmit={handleRegister}>
        <FormGroup>
          <Label for="exampleEmail">Username</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
            onChange={handleUserNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="********"
            onChange={handlePasswordChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            name="password"
            id="confirmPassword"
            placeholder="********"
            onChange={handleConfirmPasswordChange}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
