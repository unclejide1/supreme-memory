import React from 'react';

const MainContent = () => {
  return (
    <div className="main-content">
    <div className='about'>
      <h1>WienerAI</h1>
      <h2>Part Dog, Part Sausage, Part AI Trading Bot</h2>
    </div>
    <div className='about2'>
      <p>$WAI Claim Now Live</p>
      <p>You Can Now Claim Your $WAI Tokens. Plus, Stake Your Tokens To Earn Rewards!</p>
      <p>Add 0xFE8526A77A2c3590E5973bA81308B90BEA21FBFF To Your Wallet To See Your $WAI.</p>
      <div className="info">
        <p>Your Purchased $WAI = 0</p>
        <p>Your Stakeable $WAI = 0</p>
      </div>
      <button className="btn btn-primary">Buy on Dextools</button>
      <button className="btn btn-secondary">Connect Wallet</button>
      </div>
    </div>
  );
};

export default MainContent;
