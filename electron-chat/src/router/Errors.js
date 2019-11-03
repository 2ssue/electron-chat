import React from "react";
import styled from "styled-components";

function Errors({ errorMessages }) {
  if (!errorMessages || !errorMessages.length) {
    return null;
  }

  return (
    <ErrorContainer>
      {errorMessages.map(e => (
        <div key={e}>{e}</div>
      ))}
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  color: red;
  background-color: #ffdddf;
`;

export default Errors;
