import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import Errors from "./Errors";
import styled from "styled-components";
import {
  FormContainer,
  InputContainer,
  Input,
  Button
} from "./styles/common-styles";

function Login() {
  const [email, setEmail] = useState(localStorage.usesEmail || "");
  const [password, setPassword] = useState(localStorage.userPassword || "");
  const [errors, setErrors] = useState([]);

  const handleOnChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = e => {
    let isValid = true;

    e.preventDefault();

    if (!email.length) {
      isValid = false;
      errors.push("Email can't be blank");
    }
    if (!password.length) {
      isValid = false;
      errors.push("Password cant'be blank");
    }

    if (!isValid) {
      setErrors({ errors });
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.userEmail = email;
        localStorage.userPassword = password;
        window.location = "/rooms";
      })
      .catch(() => {
        setErrors({ errors: ["Incorect email or password"] });
      });
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <Errors errorMessages={errors} />
      <InputContainer>
        <label>Email address</label>
        <Input
          type="email"
          placeholder="email"
          onChange={handleOnChangeEmail}
          value={email}
        ></Input>
      </InputContainer>
      <InputContainer>
        <label>Password</label>
        <Input
          type="password"
          placeholder="password"
          onChange={handleOnChangePassword}
          value={password}
        ></Input>
      </InputContainer>
      <div>
        <Button>Login</Button>
        <SignupLink>
          <Link to="/signup">create new account</Link>
        </SignupLink>
      </div>
    </FormContainer>
  );
}

const SignupLink = styled.div`
  display: inline-block;
  margin-left: 1rem;
`;

export default Login;
