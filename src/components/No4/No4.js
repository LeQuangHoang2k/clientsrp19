import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Listen from "../Listen";
import No4Header from "./No4Header";

import No5 from "../No5/No5";
import No6 from "../No6/No6";
import No7 from "../No7/No7";

import "../../styles/no4/no4.css";
import "../../styles/no4/no4Header.css";
import "../../styles/no4/no4Body.css";

function No4(props) {
  return (
    <>
      <Listen props={props} />
      <div className="no4">
        <No4Header />
        <div className="no4__body">
          <No5 />
          <No6 />
          <No7 />
        </div>
      </div>
    </>
  );
}

export default No4;
