import React, { useState } from "react";
import * as MessageActionsCreator from "../redux/actions/messagesActions";
import { useDispatch } from "react-redux";

const TerminalInput = ({ time }) => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  const payload = {
    id: id,
    timestamp: time,
    command: data[0],
  };

  const handleMessage = (event) => {
    event.preventDefault();
    const x = event.target.value.length > 35 ? setFlag(true) : setFlag(false);
    setData([event.target.value]);
  };

  const keyPressed = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setId(id + 1);
      dispatch(MessageActionsCreator.add_message(payload));
      setFlag(false);
      setData([]);
    }
  };
  return (
    <div className={"terminal-input"}>
      <div>
        <span
          style={{
            padding: 2,
            background: "rgba(255,235,59,1)",
            color: "#000",
            fontFamily: "Monaco",
            fontSize: 12,
          }}
        >
          {"user"}
        </span>
        <span
          style={{
            padding: 2,
            background: "rgba(33,150,243,1)",
            color: "#000",
            fontFamily: "Monaco",
            fontSize: 12,
          }}
        >
          {"~/"}
        </span>
      </div>

      <input
        className={"InputField"}
        onChange={(e) => {
          handleMessage(e);
        }}
        value={data}
        onKeyDown={(e) => keyPressed(e)}
      />
      <p>
        <span
          style={{
            padding: 2,
            visibility: !flag ? flag : "hidden",
            background: "lightgrey",
            color: "#000",
            fontFamily: "Monaco",
            fontSize: 12,
          }}
        >
          {"at "}
          {time}
        </span>
      </p>
    </div>
  );
};

export default TerminalInput;
