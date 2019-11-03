import React, { useState, useEffect, useRef, useMemo } from "react";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import styled from "styled-components";
import NewMessage from "./NewMessage";
import Message from "./Message";

let fbChatRoomRef;
let stream = null;
let user = null;

function Room({ roomId }) {
  // const { roomId } = useParams();
  const database = firebase.database();
  const [description, setDescription] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(null);
  const room = useRef(null);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.off();
      }
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (room.current)
        room.current.parentNode.scrollTop =
          room.current.parentNode.scrollHeight;
    }, 0);
  });

  useEffect(() => {
    if (stream) {
      stream.off();
    }
    setMessages([]);
    fetchRoom(roomId);
  }, [roomId]);

  useEffect(() => {
    if (newMessage) {
      setMessages([...messages, newMessage]);
    }
  }, [newMessage]);

  const handleMessagePost = message => {
    const newItemRef = fbChatRoomRef.child("messages").push();
    user = user || firebase.auth().currentUser;

    newItemRef.update({
      writtenBy: {
        uid: user.uid,
        displayName: user.displayName || "undefined",
        avatar: user.avatar || ""
      },
      time: Date.now(),
      text: message
    });
  };

  const fetchRoom = roomId => {
    fbChatRoomRef = database.ref("/chatrooms/" + roomId);
    fbChatRoomRef.once("value").then(snapshot => {
      const { description } = snapshot.val();
      setDescription(description);
      window.document.title = description;
    });

    stream = fbChatRoomRef.child("messages").limitToLast(10);
    stream.on("child_added", item => {
      setNewMessage(Object.assign({ key: item.key }, item.val()));
    });
  };

  return (
    <RoomContainer ref={room}>
      <div>
        {messages.map(m => (
          <Message key={m.key} message={m} />
        ))}
      </div>
      <NewMessage onMessagePost={handleMessagePost} />
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  padding: 10px 30px;
  min-width: 20rem;
`;

export default Room;
