import React, { useState } from "react";
import * as actionsCreator from "../redux/actions/messagesActions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

export function TerminalMessages() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  const storeData = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const sentTime = new Date().toLocaleTimeString();
  // const sentDate = new Date().toLocaleDateString();

  const handleMessage = (event) => {
    event.preventDefault();
    setData([event.target.value]);
  };

  const keyPressed = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setId(id + 1);
      const payload = {
        id: id,
        timestamp: sentTime,
        msg: data[0],
      };

      dispatch(actionsCreator.add_message(payload));
      setData([]);

      console.log(storeData[id - 1]);
    }
  };

  return (
    <div style={{ marginLeft: 200 }}>
      <input
        onChange={(e) => {
          handleMessage(e);
        }}
        value={data}
        onKeyDown={(e) => keyPressed(e)}
      />
      <div></div>
    </div>
  );
}

export default TerminalMessages;
