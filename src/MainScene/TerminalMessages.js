import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommandlineWelcomePart from "./commandline-header";
import CommandlineOuputField from "./commandline-body";
import TerminalInput from "./commandline-input";
import Main from "./../WebSite/main"
import Splash from "./../WebSite/splash"


export function TerminalMessages() {
  const [value, setValue] = useState(false)
  const sentTime = new Date().toLocaleTimeString();
  const sentDate = new Date().toLocaleDateString();
  const storeData = useSelector((state) => ({
    messages: state.messages,
    redirect: state.redirect
  }));

  const handleChange=(val)=>{
    setTimeout(()=>{setValue(val)}, 8000)
  }
  
  return (
    storeData.redirect !== true?(
    <div >
      {/* Commandline Welocome portion on the top */}
      <CommandlineWelcomePart date={sentDate} time={sentTime} />
      <div className={"terminal"}>
        {/* command line output section */}
        <CommandlineOuputField source={storeData} />
        {/* command line input section */}
        <TerminalInput time={sentTime} />
      </div>
    </div>):(
      value ? 
      <Main />
      :
      <Splash  onChange={handleChange} />
    )
  );
}

export default TerminalMessages;
