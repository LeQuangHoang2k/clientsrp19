import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { offerAction } from "../../redux/actions/offerAction";

function FormSearch(props) {
  const [name, setName] = useState("");
  const envURL = useSelector((state) => state.env.URL);
  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();

    axios
      .post(`${envURL}/user/search-user`, { name })
      .catch((err) => {
        if (err) return alert("LỖI SEARCH USER ....." + err);
      })
      .then((res) => {
        if (res.data.error) return alert(res.data.error);
        alert(res.data.message);

        //redux
        const { user } = res.data;
        dispatch(offerAction(user));

        //UI
        props.history.push("/search");
      });
  };
  return (
    <div>
      <form className="no4__header" onSubmit={search}>
        <input
          className="no4__search"
          type="text"
          placeholder="&#xF002; Search user..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  );
}

export default withRouter(FormSearch);
