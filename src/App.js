import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

// Components
import Header from "./Common/header";
import Terminal from "./Common/Welcome";

function App() {
  return (
    <div
      style={{
        background: "black",
        overFlowY: "hidden",
        height: 1000,
      }}
    >
      <Terminal />
    </div>

    // <Container>
    //   <Header />
    //   <Switch>
    //     <Route path="/" exact component={HomePage} />
    //     <Route component={PageNotFound} />
    //   </Switch>
    // </Container>
  );
}

export default App;
