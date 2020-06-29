import React, { useState, useEffect } from "react";
import * as actionsCreator from "../redux/actions/messagesActions";
import { useSelector, useDispatch } from "react-redux";

export function TerminalMessages() {
  const message = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  const sentTime = new Date().toLocaleTimeString();
  const sentDate = new Date().toLocaleDateString();

  const [data, setData] = useState({ date: "", time: "", msg: "" });

  const handleMessage = (event) => {
    event.preventDefault(event);
    setData({ date: sentDate, time: sentTime, msg: event.target.value });
  };
  const handleSend = () => {
    dispatch(actionsCreator.add_message(data.time, data.msg));
    setData({ time: "", msg: "" });
  };
  const keyPressed = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            textAlign: "right",
            padding: 10,
            width: 500,
            color: "rgb(0,255,0)",
            fontFamily: "monospace",
            fontSize: 16,
          }}
        >
          {data.date !== undefined ? null : "Today_:" + sentDate}
        </p>
      </div>
      <div
        style={{ display: "flex", justifyContent: "space-evenly", padding: 10 }}
      >
        <p
          style={{
            color: "rgb(0,255,0)",
            fontFamily: "monospace",
            fontSize: 16,
            background: "transparent",
          }}
        >
          {message.payload === undefined ? null : "~$ " + message.payload}
        </p>
        <p
          style={{
            color: "rgb(0,255,0)",
            fontFamily: "monospace",
            fontSize: 16,
            background: "blue",
          }}
        >
          {!message.timestamp ? null : "@" + message.timestamp}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            color: "rgb(0,255,0)",
            fontFamily: "monospace",
            fontSize: 16,
            width: 450,
            borderTop: 0,
            borderRight: 0,
            borderLeft: 0,
            outline: "none",
            background: "transparent",
          }}
          onChange={(e) => handleMessage(e)}
          onKeyDown={(e) => keyPressed(e)}
        />
      </div>
    </div>
  );
}

export default TerminalMessages;
