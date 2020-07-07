import React, { useState, useEffect, useRef } from "react";
import * as actionsCreator from "../redux/actions/messagesActions";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

export function TerminalMessages() {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [vis, setVis] = useState(false);
  const [id, setId] = useState(0);
  const storeData = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const sentTime = new Date().toLocaleTimeString();
  const payload = {
    id: id,
    timestamp: sentTime,
    msg: data[0],
  };
  const sentDate = new Date().toLocaleDateString();

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
      dispatch(actionsCreator.add_message(payload));
      setData([]);
      setFlag(false);
      if (payload.msg === "./help_menu.sh") return setVis(true);
    }
  };

  const hanndleMenu = (e) => {};

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
      </div>
      <div
        className={"weicomeMessageBox"}
        style={{ visibility: !vis ? vis : "hidden" }}
      >
        <div className={"welcomeMessage"}>
          <span>please type => "./help_menu.sh" to start</span>
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
