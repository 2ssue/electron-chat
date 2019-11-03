import React from "react";
import Avatar from "./Avatar";
import styled from "styled-components";

function Message({ message }) {
  const { text, time, writtenBy } = message;
  const localeString = new Date(time).toLocaleString();
  return (
    <MessageContainer>
      <Avatar user={writtenBy} />
      <div>
        <div>
          <NameField>{writtenBy.displayName}</NameField>
          <TimeField>{localeString}</TimeField>
        </div>
        <TextField>{text}</TextField>
      </div>
    </MessageContainer>
  );
}

const MessageContainer = styled.div`
  padding: 0.5rem;
`;

const NameField = styled.span`
  color: gray;
  margin-right: 0.5rem;
  font-size: 0.9rem;
`;

const TimeField = styled.span`
  color: gray;
  font-size: 0.7rem;
`;

const TextField = styled.p`
  font-size: 0.9rem;
`;

export default Message;
