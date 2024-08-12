import React from 'react';
import styled from 'styled-components';
import twitter from'./twitter.svg';
import telegram from'./telegram.svg';
import dex from'./dex.svg';
import en from'./en.svg';

// Styled components
const HeaderContainer = styled.header`
  background: #000;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0;
`;

const MenuLinks = styled.div`
  display: flex;
  align-items: center;

  a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  
  .dropdown-toggle {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: white;
    right: 0;
    z-index: 1;
  }
  
  &:hover .dropdown-menu {
    display: block;
  }
  
  .dropdown-menu a {
    color: black;
    text-decoration: none;
    padding: 10px;
    display: block;
    &:hover {
      background-color: #f1f1f1;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  a {
    img {
      width: 24px;
      height: 24px;
    }
  }
`;

const BuyButton = styled.div`
  background-color: #ff6600;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 20px;
`;

const LanguageDropdown = styled(Dropdown)`
  margin-left: 20px;
  
  .flag-icon {
    width: 24px;
    height: 24px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Container>
          <Logo href="/en">
            <svg width="70" height="70" viewBox="0 0 99 89" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g mask="url(#mask0_78_65)">
                <path d="M105 -11H-5V99H105V-11Z" fill="url(#pattern0_78_65)" />
              </g>
              <defs>
                <pattern id="pattern0_78_65" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <image width="500" height="500" xlinkHref="" />
                </pattern>
              </defs>
            </svg>
          </Logo>
          <MenuLinks>
            <a href="/en/staking" title="staking">Staking</a>
            <a href="/assets/documents/whitepaper.pdf" target="_blank">Whitepaper</a>
            <Dropdown>
              <div className="dropdown-toggle">
                <a>About</a>
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="dropdown-menu">
                <a href="javascript:void(0)">What is WienerAI</a>
                <a href="javascript:void(0)">How To Buy</a>
                <a href="javascript:void(0)">FAQ</a>
              </div>
            </Dropdown>
            <a href="/assets/documents/audit.pdf" target="_blank">Audit</a>
          </MenuLinks>
          <SocialIcons>
            <a href="https://twitter.com/WienerDogAI" target="_blank">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://t.me/WienerAi" target="_blank">
              <img src={telegram} alt="Telegram" />
            </a>
            <a href="https://www.dextools.io/app/en/ether/pair-explorer/0x51d1ac117aadd99e7fc56e802c86a7464cb6ab9d?t=1722859107666" target="_blank">
              <img src={dex} alt="DexTools" />
            </a>
          </SocialIcons>
          <BuyButton>Buy now</BuyButton>
          <LanguageDropdown>
            <div className="dropdown-toggle">
              <img src={en} alt="EN" className="flag-icon" />
              <div className="font-13 mx-1 text-uppercase fw-semibold">EN</div>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="dropdown-menu">
              <a href="javascript:void(0)">EN</a>
              <a href="javascript:void(0)">FR</a>
              <a href="javascript:void(0)">DE</a>
            </div>
          </LanguageDropdown>
        </Container>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
