import React from "react";

import "../../styles/no5/no5.css";
import "../../styles/no5/no5Header.css";
import "../../styles/no5/no5Body.css";
import "../../styles/no5/no5Contact.css";
import "../../styles/no5/no5Avatar.css";
import "../../styles/no5/no5News.css";
import "../../styles/no5/no5Name.css";

import No5Header from "./No5Header";
import No5Body from "./No5Body";

function No5() {
  return (
    <div className="no5">
      <No5Header />
      <No5Body />
    </div>
  );
}

export default No5;
