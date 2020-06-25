import React, { useState, useEffect } from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";

const useWindowEvent = (event, callback) => {
  useEffect(() => {
    window.addEventListener(event, callback);
    return () => window.removeEventListener(event, callback);
  }, [event, callback]);
};
const useGlobalMouseMove = (callback) => {
  return useWindowEvent("keypress", callback);
};

const Box = ({ command, terminal }) => {
  const [flag, setFlag] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    }, 8000);
    return clearTimeout(setFlag(true));
  }, []);
  return (
    <Jumbotron style={styles.terminal}>
      <div style={styles.terminalText}>
        <span style={styles.terminalTextSpan}>{terminal[0]}</span>
      </div>
      <div style={styles.terminalText}>
        <Typewriter
          options={{ autoStart: true }}
          onInit={(typewriter) => {
            typewriter.typeString(command).start();
          }}
        />
      </div>
    </Jumbotron>
  );
};

const Header = () => {
  const [flag, setFlag] = useState(true);
  const bash = "~$";
  const user = "guest_user:";
  const command = " sudo ./fse_dev_OS.sh";
  useGlobalMouseMove((e) => (e ? setFlag(false) : null));
  return (
    <Container fluid>
      <Row className="justify-content-lg-center">
        <Col xs lg="6">
          <Jumbotron style={styles.terminal}>
            <div style={styles.terminalText}>
              <span style={styles.terminalTextSpan}>{bash}</span>
            </div>
            <input
              size="30"
              maxLength="10"
              style={styles.inputField}
              defaultValue={"press any key to start..."}
            />
          </Jumbotron>
        </Col>
      </Row>
      {!flag ? (
        <Row className="justify-content-lg-center" style={{ marginTop: -150 }}>
          <Col xs lg="6">
            <Box terminal={[bash, user]} command={command} />;
          </Col>
        </Row>
      ) : null}
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
    color: "#70e224",
    fontFamily: "monospace",
    padding: 5,
    fontSize: 16,
  },
  terminalTextSpan: {
    color: "#0b79fc",
    fontSize: 16,
  },
  inputField: {
    background: "transparent",
    border: "none",
    outline: "none",
    caretColor: "#70e224",
    color: "#70e224",
    fontFamily: "monospace",
    fontSize: 16,
  },
};
