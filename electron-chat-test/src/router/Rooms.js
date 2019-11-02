import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";
import Room from "./Room";

function Rooms({ children }) {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Rooms</h2>
      <ul>
        <li>
          <Link to={`${match.url}/1`}>Room 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Room 2</Link>
        </li>
      </ul>
      <div>{children}</div>

      <Switch>
        <Route path={`${match.path}/:roomId`}>
          <Room />
        </Route>
      </Switch>
    </div>
  );
}

export default Rooms;
