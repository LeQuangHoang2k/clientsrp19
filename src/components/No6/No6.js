import React from "react";

import "../../styles/no6/no6.css";
import "../../styles/no6/no6Logo.css";
import "../../styles/no6/no6Group.css";
import "../../styles/no6/no6Header.css";
import "../../styles/no6/no6Body.css";
import "../../styles/no6/no6Another.css";
import "../../styles/no6/no6Me.css";
import "../../styles/no6/no6Footer.css";
import "../../styles/no6/no6More.css";

import No6Header from "./No6Header";
import No6Body from "./No6Body";
import No6Footer from "./No6Footer";

function No6(props) {
  return (
    <div className="no6">
      <No6Header />
      <No6Body />
      <No6Footer />
    </div>
  );
}

export default No6;
