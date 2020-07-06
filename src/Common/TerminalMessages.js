import React, { useState, useEffect, useRef } from "react";
import * as actionsCreator from "../redux/actions/messagesActions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

export function TerminalMessages() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const storeData = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const sentTime = new Date().toLocaleTimeString();
  const payload = {
    id: id,
    timestamp: sentTime,
    msg: data[0],
  };
  // const sentDate = new Date().toLocaleDateString();

  const handleMessage = (event) => {
    event.preventDefault();
    setData([event.target.value]);
  };

  const keyPressed = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setId(id + 1);
      dispatch(actionsCreator.add_message(payload));
      setData([]);
    }
  };

  return (
    <div style={{ marginLeft: 200 }}>
      <div>
        {storeData.map((e, i) => (
          <li style={{ color: "white" }} key={i}>
            {e.id}
            {e.timestamp}
            {e.msg}
          </li>
        ))}
      </div>
      <input
        onChange={(e) => {
          handleMessage(e);
        }}
        value={data}
        onKeyDown={(e) => keyPressed(e)}
      />
    </div>
  );
}

export default TerminalMessages;
