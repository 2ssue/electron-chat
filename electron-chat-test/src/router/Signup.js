import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <h2>Signup</h2>
      <Link to="/rooms">Create new account</Link>
      <br />
      <Link to="/login">cancel</Link>
      <br />
    </div>
  );
}

export default Signup;
