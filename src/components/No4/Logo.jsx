import React from "react";

import "../../styles/no4/no4Header.css";
import logoImage from "../../img/logo.jfif";

function Logo(props) {
  return (
    <div>
      <div className="no4__logo">
        <img className="no4__logo" src={logoImage} alt="Lỗi" />
      </div>
    </div>
  );
}

export default Logo;
