import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import No4Header from "../../components/No4/No4Header";
import No9 from "../No9/No9";
import No10 from "../No10/No10";

import "../../styles/no4/no4.css";
import "../../styles/no4/no4Header.css";
import "../../styles/no4/no4Body.css";

function No4(props) {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    console.log("no4 log :", user.name);
    const token = localStorage.getItem("token");

    if (!token) return props.history.push("/");
  }, []);

  return (
    <div className="no4">
      <No4Header />
      <div className="no4__body">
        <No9 />
        <No10 />
      </div>
    </div>
  );
}

export default No4;
