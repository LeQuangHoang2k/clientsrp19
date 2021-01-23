import React from "react";
import { withRouter } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/userAction";
import Axios from "axios";

Google.propTypes = {};

function Google(props) {
  const envURL = useSelector((state) => state.env.URL);
  const dispatch = useDispatch();

  const google = (resGG) => {
    //check input
    const { googleId, tokenId } = resGG;
    console.log(resGG);

    Axios.post(`${envURL}/account/login-google`, { googleId, tokenId })
      .catch((err) => {
        if (err) throw err;
      })
      .then((res) => {
        if (res.data.error) return alert(res.data.error);
        console.log("ok", res.data);

        //check redux
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        dispatch(
          loginAction({ id: user.id, email: user.email, name: user.name })
        );

        //check UI

        props.history.push("/chat");
      });
  };
  const googleFailure = (res) => {};

  return (
    <GoogleLogin
      clientId="496509540327-sdht0p2mir6mjjshd0ih9ks54h2k9bq9.apps.googleusercontent.com"
      onSuccess={google}
      onFailure={googleFailure}
      render={(props) => {
        return (
          <button
            type="button"
            className="no1__group fa fa-google no1__google"
            onClick={props.onClick}></button>
        );
      }}
    />
  );
}

export default withRouter(Google);
