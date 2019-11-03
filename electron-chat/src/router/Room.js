import React from "react";
import { useParams } from "react-router-dom";

function Room() {
  const { roomId } = useParams();
  return (
    <div>
      <h3>Room {roomId}</h3>
    </div>
  );
}

export default Room;
