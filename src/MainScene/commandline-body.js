import React, { useEffect, useState } from "react";

const availableMethods = ["--start", "ls", "cd" ,"echo", "clear", "--help"];
const listView = ["etc", "opt","bin","./sadikerisen",".home"]

const CommandlineOuput_bodyfield = (outputData) => {
  const [value, setValue] = useState([]);
  const verify = availableMethods.includes(outputData.outputData);

  const inputCommand = outputData.outputData.split(/ (.*)/);

  useEffect(() => {
    switch (inputCommand[0]) {
      case "ls":
        return setValue(listView);
      case "echo":
        return setValue(inputCommand.slice(1)[0]);
      case "--help":
        return setValue(availableMethods);
      case "--start":
        return setInterval(() => {
          setValue(["connecting..."]);
        }, 5000);
    
      case "cd "+inputCommand[0]? inputCommand[0].toString():null:
        return setValue(["cannot open file permission denied."])  
      default:
        return setValue(["cannot find the command"]);
    }
  }, []);

  return verify ? (
    <div>
      <span
        style={{
          padding: 2,
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        {"> "}
      </span>
      {Array.isArray(value) ? (
        value.sort().map((e, i) => (
          <span
            style={{
              padding: 2,
              color: "whitesmoke",
              fontFamily: "Monaco",
              fontSize: 12,
            }}
            key={i}
          >
            {e}{" "}
          </span>
        ))
      ) : (
        <span
          style={{
            padding: 2,
            color: "whitesmoke",
            fontFamily: "Monaco",
            fontSize: 12,
          }}
        >
          value
        </span>
      )}
    </div>
  ) : (
    <div>
      <span
        style={{
          padding: 2,
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        {"> "}
      </span>
      <span
        style={{
          padding: 2,
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        {value}
      </span>
    </div>
  );
};

const CommandlineOuputField = (source) => {
  return source !== null
    ? source.source.messages.map((e, i) => (
        <>
          <div className={"terminal-output"}>
            <div>
              <span
                style={{
                  padding: 2,
                  background: "rgba(33,150,243,1)",
                  color: "whitesmoke",
                  fontFamily: "Monaco",
                  fontSize: 12,
                }}
                key={i}
              >
                {">>"}
              </span>
              <span
                style={{
                  padding: 2,
                  color: "whitesmoke",
                  fontFamily: "Monaco",
                  fontSize: 12,
                }}
              >
                {e.command}
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
          <CommandlineOuput_bodyfield outputData={e.command} />
        </>
      ))
    : null;
};
export default CommandlineOuputField;
