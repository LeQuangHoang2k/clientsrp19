import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Name(props) {
  const { _id, contactList, nameOfGroup } = props;

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  let [name, setName] = useState("");

  useEffect(() => {
    console.log("contactList", contactList, nameOfGroup);

    //room 2 person
    if (contactList.length === 2) {
      console.log(contactList[0]._id, user.id);
      contactList[0]._id === user.id
        ? (name = contactList[1].name)
        : (name = contactList[0].name);

      //redux

      //UI
      setName(name);
      return;
    }

    //room >2 person
    setName(nameOfGroup);
  }, []);

  return (
    <div>
      <p className="no5__name">{name}</p>
    </div>
  );
}

export default Name;
