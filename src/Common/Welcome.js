import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const Box = ({ terminal, command }) => {
  const [flag, setFlag] = useState(true);
  const [val, setVal] = useState();
  const navList =
    "<p> a) Git </p> <br> <p> b) Education</p> <br> <p> c) Skills</p>";
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 5000);
  }, []);
  return (
    <Jumbotron style={styles.terminal}>
      <div style={styles.terminalText}>{terminal}</div>
      <div style={styles.terminalText}>
        {flag === true && (
          <Typewriter
            options={{ autoStart: true }}
            onInit={(typewriter) => {
              typewriter.typeString(command).start();
            }}
          />
        )}
        {flag !== true && (
          <Typewriter
            options={{ autoStart: true }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(2000)
                .typeString(".....")
                .pauseFor(2000)
                .deleteAll(10)
                .pasteString(navList)
                .start();
            }}
          />
        )}
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
        <Col xs lg="6">
          <Box terminal={terminal} command={command} />;
        </Col>
      </Row>
    </Container>
  );
};
export default Header;

const styles = {
  terminal: {
    background: "transparent",
    borderRadius: 0,
    display: "flex",
    justifyContent: "'flex-start'",
  },
  terminalText: {
    color: "rgb(0, 255, 0)",
    fontFamily: "monospace",
  },
};
