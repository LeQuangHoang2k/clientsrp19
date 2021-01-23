import React from "react";
import { withRouter } from "react-router-dom";

import Avatar from "../../img/avatar.jpg";
import Logo from "./Logo";
import FormSearch from "./FormSearch";
import Logout from "./Logout";

function No4Header(props) {
  return (
    <div className="no4__header">
      <Logo />
      <FormSearch />
      <Logout />
    </div>
  );
}

export default withRouter(No4Header);
