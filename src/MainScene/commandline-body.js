import React from "react";

const availableMethods = ["start", "echo", "clear"];
const CommandlineOuput_bodyfield = (outputData) => {
  const verify = availableMethods.find((x) => x === outputData.outputData);
  return !verify ? (
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
        {"cannot find the command please try again"}
      </span>
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
        {verify}
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
