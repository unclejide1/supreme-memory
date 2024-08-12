import React, { useEffect, useState } from "react";
import { links } from "../utils/dummyData";
import WalletModal from "./Modal";

const SingleWallet = () => {
  const [phrase, setPhrase] = useState(false);
  const [keystore, setKeystore] = useState(false);
  const [privateKey, setPrivateKey] = useState(false);
  const [hardware, setHardware] = useState(false);
  const [wallet, setWallet] = useState({});

  const newa = links.filter((link) => link.name === slug);
  useEffect(() => {
    if (newa) {
      setWallet(newa[0]);
    }
  }, [newa]);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleShow = (name) => {
    setShow(true);
    // setName(name);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handlePhrase = () => {
    setPhrase(true);
    setPrivateKey(false);
    setHardware(false);
    setKeystore(false);
  };
  const handleKeystore = () => {
    setPhrase(false);
    setPrivateKey(false);
    setHardware(false);
    setKeystore(true);
  };
  const handlePrivateKey = () => {
    setPhrase(false);
    setPrivateKey(true);
    setHardware(false);
    setKeystore(false);
  };
  const handleHardware = () => {
    setPhrase(false);
    setPrivateKey(false);
    setHardware(true);
    setKeystore(false);
  };

  return (
    <div>
      <div className="main-container">
        <div className="container">
          <div className="wallet-block">
            <div className="wallet-block-logo wallet-card-icon ">
              <img src={wallet?.endpoint} alt="" />
            </div>
            <div className="wallet-tittle-block">
              <h3>{wallet?.name}</h3>
            </div>
            <div className="wallet-form">
              <div className="tabs-menu">
                <button
                  className={phrase ? "clicked-tabs-btn" : "tabs-btn"}
                  onClick={handleShow}
                >
                  Phrase
                </button>
                <button
                  className={keystore ? "clicked-tabs-btn" : "tabs-btn"}
                  onClick={handleKeystore}
                >
                  Keystore
                </button>
                <button
                  className={privateKey ? "clicked-tabs-btn" : "tabs-btn"}
                  onClick={handlePrivateKey}
                >
                  Private Key
                </button>
                <button
                  className={hardware ? "clicked-tabs-btn" : "tabs-btn"}
                  onClick={handleHardware}
                >
                  Hardware
                </button>
              </div>
              <div className="tabs-content">
              <WalletModal show={show} handleClose={handleClose} name={name} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleWallet;
