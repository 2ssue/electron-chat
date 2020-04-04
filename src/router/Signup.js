import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Errors from './Errors';
import firebase from 'firebase/app';
import {
  FormContainer,
  InputContainer,
  Input,
  Button,
} from './styles/common-styles';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [errors, setErrors] = useState([]);

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const handleOnChangeAvatar = (e) => {
    setAvatar(e.target.value);
  };

  const handleOnSubmit = (e) => {
    let isValid = true;
    const errorList = [];
    e.preventDefault();

    if (!email.length) {
      isValid = false;
      errorList.push("Email address can't be blank");
    }

    if (!password.length) {
      isValid = false;
      errorList.push("Password can't be blank");
    }

    if (!name.length) {
      isValid = false;
      errorList.push("Name can't be blank");
    }

    if (!isValid) {
      setErrors(errorList);
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        return newUser.user.updateProfile({
          displayName: name,
          photoURL: avatar,
        });
      })
      .then(() => {
        window.location = '#/rooms';
      })
      .catch((err) => {
        setErrors([err.message]);
      });
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <Errors errorMessages={errors} />
      <InputContainer>
        <label>Email address *</label>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={handleOnChangeEmail}
        />
      </InputContainer>
      <InputContainer>
        <label>Password *</label>
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={handleOnChangePassword}
        ></Input>
      </InputContainer>
      <InputContainer>
        <label>User name *</label>
        <Input
          type="text"
          placeholder="user name"
          value={name}
          onChange={handleOnChangeName}
        ></Input>
      </InputContainer>
      <InputContainer>
        <label>Avatar URL</label>
        <Input
          type="text"
          placeholder="avatar URL"
          value={avatar}
          onChange={handleOnChangeAvatar}
        ></Input>
      </InputContainer>
      <div>
        <Button>Create new account</Button>
        <Link to="/login">
          <Button type="button">Cancel</Button>
        </Link>
      </div>
    </FormContainer>
  );
}

export default Signup;
