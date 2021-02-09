import React from "react";
import { useState, useEffect } from "react";
import Select from "react-select";

import { useSelector } from "react-redux";

import "../../styles/no5/no5Room.css";

function InputRoom(props) {
  // const envURL = useSelector((state) => state.env.URL);
  const user = useSelector((state) => state.user);
  const contact = useSelector((state) => state.contact);
  const socket = useSelector((state) => state.socket.socket);

  const [member, setMember] = useState([]);
  const [options, setOptions] = useState([]);

  const enter = (e) => {
    if (e.key !== "Enter") return;
    if (member.length < 2) return alert("nhóm phải trên 3 thành viên");

    //send member
    socket.emit("create-room", { user, member });

    // UI

    setMember([]);
  };

  const onChange = (params) => {
    setMember(params);
    // console.log(params);
  };

  //choose option
  useEffect(() => {
    if (contact.list.length === 0) return;
    // console.log(contact.list);

    contact.list.forEach((item) => {
      console.log(item.memberIds);
      item.memberIds.forEach((subItem) => {
        // console.log(subItem.name);

        if (subItem.name !== user.name) {
          options.push({
            value: subItem._id,
            label: subItem.name,
          });
        }
      });
    });
  }, [contact.list, options, user.name]);

  //non-priority
  useEffect(() => {
    console.log(member);
    socket.on("success-invited", () => {
      alert("bạn đã được mời");
    });
  }, [socket]);

  return (
    <div className="no5__contact" id="no5__room">
      <Select
        id="no5__select"
        isMulti
        isSearchable
        autoFocus
        value={member}
        onChange={onChange}
        onKeyDown={enter}
        options={options}
      />
    </div>
  );
}

export default InputRoom;
