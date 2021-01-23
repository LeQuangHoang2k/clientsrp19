import React from "react";
import { withRouter } from "react-router-dom";
import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

import { loginAction } from "../../redux/actions/userAction";

function Facebook(props) {
  const envURL = useSelector((state) => state.env.URL);
  const dispatch = useDispatch();

  const facebook = (resFB) => {
    //check input
    const { userID, accessToken } = resFB;

    Axios.post(`${envURL}/account/login-facebook`, { userID, accessToken })
      .catch((err) => {
        if (err) throw err;
      })
      .then((res) => {
        if (res.data.error) return alert(res.data.error);
        console.log("ok", res.data);

        //check redux

        const { token, user } = res.data;
        console.log("user", user);
        localStorage.setItem("token", token);
        dispatch(
          loginAction({ id: user.id, email: user.email, name: user.name })
        );

        //check UI
        props.history.push("/chat");
      });
  };
  return (
    <FacebookLogin
      appId="217134146502539"
      callback={facebook}
      cssClass="no1__group fa fa-facebook no1__fb"
      textButton=""
    />
  );
}

export default withRouter(Facebook);
