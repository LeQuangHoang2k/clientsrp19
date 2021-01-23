import React from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

import { loginAction } from "../../redux/actions/userAction";
import LogoutImage from "../../img/logout.png";
import "../../styles/no4/Logout.css";
import { currentContactAction } from "../../redux/actions/currentContactAction";

function Logout(props) {
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();

    //redux
    const token = localStorage.removeItem("token");
    localStorage.removeItem("persist:srp19v0");

    //UI
    if (!token) window.location.reload();
  };
  return (
    <button className="no4__logout" onClick={logout}>
      <img src={LogoutImage} className="no4__logout" alt="aaa" />
    </button>
  );
}

export default withRouter(Logout);
