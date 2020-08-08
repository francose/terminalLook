import React, { useEffect, useState } from "react";

const availableMethods = ["--start", "ls", "cd" ,"echo", "clear", "--help"];
const listView = ["etc", "opt","bin","./sadikerisen", "home"]

const matchStrings=(stringA, stringB)=>{
  
    if (stringB !== undefined){
      
        if (stringA.toString().split("").length !== stringB.toString().split("").length){ 
          return false
      }else {
        for (const i in stringA.toString().split("")){
          if (stringA.toString().split("")[i]=== stringB.toString().split("")[i]) return true
          return  false
        }
      }
    }
    else{
      return "wrong input"
    }
  
}

const CommandlineOuput_bodyfield = (outputData) => {
  const [value, setValue] = useState([]);
  const [redirect , setRedirect] = useState(false);
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
        const connecting = "connecting..."
        return setInterval(() => {
          setValue([connecting]),
          setRedirect(true)
        }, 2000);
    
      case inputCommand[0].includes("cd") ? inputCommand[0].toString(): null:
            const verify = matchStrings(inputCommand[1].toString(), 
            listView[listView.indexOf(!listView.includes(inputCommand[1]) ?
             null
             : inputCommand[1].toString()
             )])
            if (verify !== true){
              return setValue(["Permission denied."]);      
            }else{
              return setValue([]);      
            }
          
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
