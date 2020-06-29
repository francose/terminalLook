import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components

import TerminalMessages from "./Common/TerminalMessages";
import "./App.css";

function App() {
  return (
    <div className={"App"}>
      <TerminalMessages />
    </div>
  );
}

export default App;
