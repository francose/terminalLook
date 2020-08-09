import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommandlineWelcomePart from "./commandline-header";
import CommandlineOuputField from "./commandline-body";
import TerminalInput from "./commandline-input";
import Main from "./../WebSite/main"


const splashScene = ()=>{
  return <div>
    <div >
        <h1 className={"LoaderText"}>Please wait while loading...</h1>
      </div>
    <div className={"LoaderBox"}>
       <div className={"loader"}></div>
    </div>
  </div>
}

export function TerminalMessages() {
  const [loading, setloading] = useState(true)
  const sentTime = new Date().toLocaleTimeString();
  const sentDate = new Date().toLocaleDateString();
  const storeData = useSelector((state) => ({
    messages: state.messages,
    redirect: state.redirect
  }));
   useEffect(()=>{
     setTimeout(()=>{
      setloading(false)
     }, 8500)
  },[])
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
      !loading ? 
      <Main />
      :
      splashScene()
    )
  );
}

export default TerminalMessages;
