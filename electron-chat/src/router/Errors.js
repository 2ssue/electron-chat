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
  padding: 10;
  margin-bottom: 30;
  border-radius: 5;
  background-color: #ffdddf;
`;

export default Errors;
