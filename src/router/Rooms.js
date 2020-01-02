import React, { useState, useEffect } from 'react';
import Room from './Room';
import RoomItem from './RoomItem';
import firebase from 'firebase/app';
import styled from 'styled-components';
import { Button, Input } from './styles/common-styles';

function Rooms() {
  const roomId = window.location.hash.split('/')[2];
  const [roomName, setRoomName] = useState('');
  const [rooms, setRooms] = useState([]);
  const database = firebase.database();

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleOnChangeRoomName = (e) => {
    setRoomName(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!roomName.length) {
      return;
    }
    //Firebase 데이터베이스에 새로운 채팅방 생성
    const newRoomRef = database.ref('/chatrooms').push();
    const newRoom = {
      description: roomName,
    };

    //생성한 채팅방 description 변경
    newRoomRef.update(newRoom).then(async () => {
      //상태 초기화
      setRoomName('');
      //채팅방 다시 가져오기
      return fetchRooms().then(() => {
        window.location = `/rooms/${newRoomRef.key}`;
      });
    });
  };

  const fetchRooms = () => {
    //Firebase 데이터베이스에서 채팅방 20개 가져옴
    return database
      .ref('/chatrooms')
      .limitToLast(20)
      .once('value')
      .then((snapshot) => {
        const rooms = [];
        snapshot.forEach((item) => {
          //데이터베이스에서 추출한 데이터 객채화
          rooms.push(Object.assign({ key: item.key }, item.val()));
        });
        setRooms(rooms);
      });
  };

  const renderRoomList = () => {
    return (
      <div>
        {rooms.map((r) => (
          <RoomItem room={r} key={r.key} selected={r.key === roomId} />
        ))}
        <div>
          <FormContainer onSubmit={handleOnSubmit}>
            <Input
              type="text"
              placeholder="New Room"
              onChange={handleOnChangeRoomName}
              value={roomName}
            />
            <Button>
              <span>+</span>
            </Button>
          </FormContainer>
        </div>
      </div>
    );
  };

  const renderRoom = () => {
    if (roomId) {
      return <Room roomId={roomId} />;
    } else {
      return (
        <div>
          <ChatIcon>
            <span>chattingRoom</span>
          </ChatIcon>
          <p>Join a chat room from the sidebar or creta your chat room</p>
        </div>
      );
    }
  };

  return (
    <RoomsContainer>
      <div>{renderRoomList()}</div>
      <div>{renderRoom()}</div>
    </RoomsContainer>
  );
}

const FormContainer = styled.form`
  button {
    margin-left: 0.5rem;
    margin-right: 0;
  }
`;

const ChatIcon = styled.div`
  font-size: 1rem;
  color: #ddd;
`;

const RoomsContainer = styled.div`
  display: inline-flex;
`;

export default Rooms;
