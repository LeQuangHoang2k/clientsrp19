import React from "react";
import { useSelector } from "react-redux";

import { createRoom } from "../../animations/createRoom";

function No5Header(props) {
  const user = useSelector((state) => state.user);

  return (
    <div className="no5__header">
      <p className="no5__header">{user.name}</p>
      <button className="no5__header" onClick={createRoom}>
        <i className="fa fa-user fa-2x no5__header" aria-hidden="true"></i>
        &nbsp;
        <i className="fa fa-user-plus fa-2x no5__header" aria-hidden="true"></i>
      </button>
    </div>
  );
}

export default No5Header;
