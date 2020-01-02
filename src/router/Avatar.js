import React from 'react';
import styled from 'styled-components';

function Avatar({ user }) {
  const { photoURL } = user;

  if (photoURL) {
    return <Img src={photoURL} />;
  } else {
    return <Img src={`https://image.flaticon.com/icons/svg/149/149071.svg`} />;
  }
}

const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  float: left;
  margin-right: 1rem;
  margin-top: 1rem;
`;

export default Avatar;
