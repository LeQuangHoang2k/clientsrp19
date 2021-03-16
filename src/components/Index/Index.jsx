import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginAction } from "../../redux/actions/userAction";
import { blur } from "../../animations/blur";
import Facebook from "./Facebook";
import Google from "./Google";
import Twitter from "./Twitter";

import "../../styles/no1.css";

function Index(props) {
  const envURL = useSelector((state) => state.env.URL);
  const user = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  //test https://www.youtube.com/watch?v=Z87OZtIYC_0
  //https://www.youtube.com/watch?v=980wnspXLe0
  const [test, setTest] = useState("");
  const Test = (params) => {
    // console.log("params", params);
    setTest(params);
  };

  //check token
  useEffect(() => {
    console.log("no4 log :", user.name);
    const token = localStorage.getItem("token");

    if (!token) return props.history.push("/");
    props.history.push("/chat");
  }, [props.history, user.name]);

  const login = (e) => {
    e.preventDefault();

    //check input
    if (email.length <= 0 || password <= 0)
      return alert("Vui lòng nhập đầy đủ thông tin");

    axios
      .post(`${envURL}/account/login`, { email, password })
      .catch((err) => {
        if (err) throw err;
      })
      .then((res) => {
        if (res.data.error) return alert(res.data.error);
        console.log(res.data);

        //check redux

        const { token, user } = res.data;
        localStorage.setItem("token", token);
        dispatch(
          loginAction({ id: user.id, name: user.name, email: user.email })
        );

        //check UI

        setEmail("");
        setPassword("");

        props.history.push("/chat");
      });
  };

  return (
    <div className="no1">
      <form className="no1__login" onSubmit={login}>
        <h1 className="no1__title">Sign in</h1>
        <div className="no1__login no1__email">
          <input
            type="email"
            className="no1__login no1__email"
            name="no1__email"
            id="no1__email__input1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => blur(email, "no1__email__label1")}
          />
          <label
            htmlFor="no1__email__input1"
            className="no1__login no1__email"
            id="no1__email__label1">
            Your email:{test}
          </label>
        </div>

        <div className="no1__login no1__password">
          <input
            type="password"
            className="no1__login no1__password"
            name="no1__password"
            id="no1__password__input1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => blur(password, "no1__password__label1")}
          />
          <label
            htmlFor="no1__password__input1"
            className="no1__login no1__password"
            id="no1__password__label1">
            Your password:
          </label>
        </div>

        <div className="no1__forgot">
          <a href="/fogot" className="no1__forgot">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="no1__login">
          Sign in
        </button>

        <p className="no1__text">or Sign in with:</p>

        <div className="no1__group">
          <Facebook />
          <Twitter test={test} Test={Test} />
          <Google />
        </div>

        <hr className="no1__line" />

        <div className="no1__register">
          Not a member ? &nbsp;
          <a href="register" className="no1__register">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Index;
