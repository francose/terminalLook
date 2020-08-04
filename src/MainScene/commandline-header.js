import React, { useState } from "react";
const CommandlineWelcomePart = ({ date, time }) => {
  const more =  ["You can navigate through by typing available commands for example;", " to execute => ./sadikerisen" , "to run a command --start"]
  return (
    <>
      <div
        style={{
          padding: 2,
          background: "rgba(33,150,243,.05)",
          color: "whitesmoke",
          fontFamily: "Monaco",
          fontSize: 12,
        }}
      >
        last login: {date} {time} on ttys000
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
      <div className={"welcomeMessageNext"}>
         {
            more.map((i)=>(
              <p>{i}</p>
            ))
          }
         </div>
        <div className={"welcomeMessage"}>
          <p>please type => "start" to begin </p>
          <p>To see available commands => "--help" </p>
          
        </div>
   
      </div>
    </>
  );
};

export default CommandlineWelcomePart;
