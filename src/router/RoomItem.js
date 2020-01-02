import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function RoomItem({ selected, room }) {
  const { description, key } = room;
  return (
    <RoomItemContainer selected={selected}>
      <Link to={`/rooms/${key}`}>
        <div>
          <strong>{description}</strong>
        </div>
      </Link>
    </RoomItemContainer>
  );
}

const RoomItemContainer = styled.div`
  background-color: ${(props) =>
    props.selected === false ? 'white' : 'cornflowerblue'};
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  a {
    text-decoration: none;
    color: ${(props) => (props.selected === false ? 'black' : 'white')};
  }
`;

export default RoomItem;
