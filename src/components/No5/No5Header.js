import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { createRoom } from "../../animations/createRoom";

import groupImage from "../../img/group.jpg";

function No5Header(props) {
  const user = useSelector((state) => state.user);
  const room = useSelector((state) => state.room);
  const dispatch = useDispatch();

  return (
    <div className="no5__header">
      <p className="no5__header">{user.name}</p>
      <button className="no5__header" onClick={createRoom}>
        <i class="fa fa-user fa-2x no5__header" aria-hidden="true"></i>
        &nbsp;
        <i class="fa fa-user-plus fa-2x no5__header" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default No5Header;
