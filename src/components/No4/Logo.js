import React from "react";

import logoImage from "../../img/logo.jfif";



import "../../styles/no4/no4Header.css";

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
