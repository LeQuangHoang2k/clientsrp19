import React, { useEffect } from "react";

import Main from "../../../components/Header/Main/Main";
import Top from "../../../components/Header/Top/Top";
import Bottom from "../../../components/Header/Bottom/Bottom";

import style from "./Header.module.css";
import { apiGet } from "../../../configs/api/configAPI";
import { FREE_API, NGHI_API } from "../../../configs/api/constant";

function Header(props) {
  useEffect(() => {
    handleAPI();
  }, []);

  const handleAPI = async () => {
    const res = await apiGet(NGHI_API);

    console.log("🚀 ~ file: Header.jsx ~ line 16 ~ handleAPI ~ res", res);
    console.log(
      "🚀 ~ file: Header.jsx ~ line 22 ~ handleAPI ~ REACT_APP_SECRET_NAME",
      process.env.REACT_APP_SECRET_NAME
    );
  };

  return (
    <div className={style.header}>
      <Main>
        <Top />
        <Bottom />
      </Main>
    </div>
  );
}

export default Header;
