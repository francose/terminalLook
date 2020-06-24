import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Box = ({ terminal, command }) => {
  const styles = {
    terminal: {
      background: "black",
      borderRadius: 0,
      display: "flex",
      justifyContent: "'flex-start'",
    },
    terminalText: {
      color: "rgb(0, 255, 0)",
      fontFamily: "monospace",
    },
  };
  return (
    <Jumbotron style={styles.terminal}>
      <div style={styles.terminalText}>{terminal}</div>
      <div style={styles.terminalText}>
        <Typewriter
          options={{ autoStart: true }}
          onInit={(typewriter) => {
            typewriter
              .typeString(command)
              .callFunction(() => {
                console.log("Connection Initiated... Hello :D ");
              })
              .pauseFor(800)
              .typeString(".... \n")
              .pauseFor(800)
              .typeString("Connecting....")
              .start();
          }}
        />
      </div>
    </Jumbotron>
  );
};

const Header = () => {
  const terminal = "~$:";
  const command = "sudo ./sadik_erisen.h ";
  return (
    <Container fluid>
      <Row className="justify-content-lg-center">
        <Col xs lg="12">
          <Box terminal={terminal} command={command} />
        </Col>
      </Row>
    </Container>
  );
};
export default Header;
