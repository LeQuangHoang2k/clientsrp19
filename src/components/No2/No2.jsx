import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/no2/no2.css";
import "../../styles/no2/no2Title.css";
import "../../styles/no2/no2Register.css";
import "../../styles/no2/no2Group.css";
import "../../styles/no2/no2Text.css";
import "../../styles/no2/no2Icon.css";
import "../../styles/no2/no2Fb.css";
import "../../styles/no2/no2Google.css";

import { blur } from "../../animations/blur";
import { useSelector } from "react-redux";

function No2(props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const envURL = useSelector((state) => state.env.URL);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    alert(user.name)
    if (user.name !== "default") return props.history.push("/chat");
  }, []);

  const register = (e) => {
    e.preventDefault();

    //check input

    if (
      name.length <= 0 ||
      phone.length <= 0 ||
      email.length <= 0 ||
      password.length <= 0
    )
      return alert("Vui lòng nhập đầy đủ thông tin");

    axios
      .post(`${envURL}/account/register`, { name, phone, email, password })
      .catch((err) => {
        if (err) throw err;
      })
      .then((res) => {
        if (res.data.error) return alert(res.data.error);
        alert(res.data.message);

        //redux

        //UI
        setEmail("");
        setPassword("");
        props.history.push("/");
      });
  };

  return (
    <div className="no2">
      <form className="no2__register" method="POST" onSubmit={register}>
        <h1 className="no2__title">Sign up</h1>

        <div className="no2__register">
          <input
            type="text"
            className="no2__register no2__name"
            name="no2__name"
            id="no2__name__input1"
            onChange={(e) => setName(e.target.value)}
            onBlur={() => blur(name, "no2__name__label1")}
          />
          <label
            htmlFor="no2__name__input1"
            className="no2__register no2__name"
            id="no2__name__label1">
            Your name
          </label>
        </div>

        <div className="no2__register">
          <input
            type="phone"
            className="no2__register no2__phone"
            name="no2__phone"
            id="no2__phone__input1"
            onChange={(e) => setPhone(e.target.value)}
            onBlur={() => blur(phone, "no2__phone__label1")}
          />
          <label
            htmlFor="no2__phone__input1"
            className="no2__register no2__phone"
            id="no2__phone__label1">
            Your Phone
          </label>
        </div>

        <div className="no2__register">
          <input
            type="email"
            className="no2__register no2__email"
            name="no2__email"
            id="no2__email__input1"
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => blur(email, "no2__email__label1")}
          />
          <label
            htmlFor="no2__email__input1"
            className="no2__register no2__email"
            id="no2__email__label1">
            Your email
          </label>
        </div>
        
        <div className="no2__register">
          <input
            type="password"
            className="no2__register no2__password"
            name="no2__password"
            id="no2__password__input1"
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => blur(password, "no2__password__label1")}
          />
          <label
            htmlFor="no2__password__input1"
            className="no2__register no2__password"
            id="no2__password__label1">
            Your password
          </label>
        </div>

        <div className="no2__group">
          <a href="/" className="no2__group no2__login">
            <p className="no2__login">Sign in</p>
          </a>
          <button type="submit" className="no2__group no2__register">
            <p className="no2__register">Sign up</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default No2;
