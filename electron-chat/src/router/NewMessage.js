import React, { useState } from "react";
import styled from "styled-components";
import { Button, Input } from "./styles/common-styles";

function NewMessage({ onMessagePost }) {
  const [message, setMessage] = useState("");

  const handleOnChange = e => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = e => {
    if (!onMessagePost || !message.length) {
      return;
    }
    onMessagePost(message);
    setMessage("");
    e.preventDefault();
  };

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <Input type="text" onChange={handleOnChange} value={message} />
      <Button>POST</Button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  input {
    min-width: 30rem;
  }
  button {
    margin-left: 0.5rem;
  }
`;

export default NewMessage;
