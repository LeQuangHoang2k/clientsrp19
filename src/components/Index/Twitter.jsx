import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { TwitterLogin } from "react-twitter-login";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/userAction";
import Axios from "axios";

Twitter.propTypes = {};

function Twitter(props) {
  const envURL = useSelector((state) => state.env.URL);
  const dispatch = useDispatch();

  useEffect(() => {
    const { Test } = props;
    Test(1);
  }, []);

  return (
    <button
      type="button"
      className="no1__group fa fa-twitter no1__twiter"></button>
  );
}

export default withRouter(Twitter);
