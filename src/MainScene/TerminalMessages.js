import React from "react";
import { useSelector } from "react-redux";
import CommandlineWelcomePart from "./commandline-header";
import CommandlineOuputField from "./commandline-body";
import TerminalInput from "./commandline-input";

export function TerminalMessages() {
  const sentTime = new Date().toLocaleTimeString();
  const sentDate = new Date().toLocaleDateString();
  const storeData = useSelector((state) => ({
    messages: state.messages,
  }));

  return (
    <div>
      {/* Commandline Welocome portion on the top */}
      <CommandlineWelcomePart date={sentDate} time={sentTime} />
      <div className={"terminal"}>
        {/* command line output section */}
        <CommandlineOuputField source={storeData} />
        {/* command line input section */}
        <TerminalInput time={sentTime} />
      </div>
    </div>
  );
}

export default TerminalMessages;
