import React, { useState, useEffect, useRef } from "react";
import * as MessageActionsCreator from "../redux/actions/messagesActions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

export function TerminalMessages() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [id, setId] = useState(0);
  const [commands, setCommands] = useState([]);

  const sentTime = new Date().toLocaleTimeString();
  const sentDate = new Date().toLocaleDateString();

  const storeData = useSelector((state) => state.messages);
  const readyCommands = useSelector((state) => Object.values(state.commands));

  const dispatch = useDispatch();
  const payload = {
    id: id,
    timestamp: sentTime,
    msg: data[0],
  };

  const handleMessage = (event) => {
    event.preventDefault();

    if (event.target.value.length > 35) {
      setFlag(true);
    } else {
      setFlag(false);
    }

    setData([event.target.value]);
  };

  const keyPressed = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setId(id + 1);
      dispatch(MessageActionsCreator.add_message(payload));
      setData([]);
      setFlag(false);
      if (payload.msg.toLowerCase() === "--start") {
        setCommands(readyCommands);
      }
    }
  };

  return (
    <div>
      <div
        style={{
          padding: 2,
          background: "rgba(33,150,243,.05)",
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        last login: {sentDate} {sentTime} on ttys001
        <span
          style={{
            padding: 2,
            background: "lightgrey",
            color: "#000",
            fontFamily: "Monaco",
            fontSize: 12,
            marginLeft: 100,
            textAlign: "right",
          }}
        >
          MyOS
        </span>
      </div>
      <div className={"weicomeMessageBox"}>
        <div className={"welcomeMessage"}>
          <span>please type => "--start" to begin </span>
        </div>
      </div>

      <div className={"terminal"}>
        {/* command line output section */}

        {storeData.map((e, i) => (
          <div className={"terminal-output"} key={i}>
            <div>
              <span
                style={{
                  padding: 2,
                  background: "rgba(33,150,243,1)",
                  color: "whitesmoke",
                  fontFamily: "Monaco",
                  fontSize: 12,
                }}
              >
                {">"}
              </span>
              <span
                style={{
                  padding: 2,
                  color: "whitesmoke",
                  fontFamily: "Monaco",
                  fontSize: 12,
                }}
                onChange={() => setCommandVal(e.msg)}
              >
                {e.msg}
              </span>
            </div>
            <div>
              <span
                style={{
                  padding: 2,
                  background: "lightgrey",
                  color: "#000",
                  fontFamily: "Monaco",
                  fontSize: 12,
                }}
              >
                {"at "}
                {e.timestamp}
              </span>
            </div>
          </div>
        ))}

        <div
          style={{
            padding: 2,
            color: "whitesmoke",
            fontFamily: "Monaco",
            fontSize: 12,
          }}
        >
          {commands.map((e, i) => (
            <li
              style={{
                padding: 2,
                color: "whitesmoke",
                fontFamily: "Monaco",
                fontSize: 12,
                listStyleType: "none",
              }}
              key={i}
            >
              {">> "}
              {e}
            </li>
          ))}
        </div>

        {/* command line input section */}
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
              {sentTime}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TerminalMessages;
