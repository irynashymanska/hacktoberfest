import React from 'react';

function Header() {
  return (
    <div style={headerContainer}>
      <div style={logoContainer}>
        <div style={logoElement}></div>
        <img
          src="./logo.svg"
          alt="Logo"
          style={logoImage}
        />
        
      </div>
      <div style={logoElement}></div>
        <img
          src="./hf10_icon.png"
          alt="Logo"
          style={logoImage}
        />

      <div style={contactContainer}>
        <div style={contactText}>Контакти</div>
        <div style={contactLines}>
          <div style={contactLine}></div>
          <div style={contactLine}></div>
          <div style={contactLine}></div>
          <div style={contactLine}></div>
          <div style={contactLine}></div>
          <div style={contactLine}></div>
        </div>
      </div>
    </div>
  );
}

const headerContainer = {
  width: '100%',
  height: '100%',
  paddingLeft: '15px',
  paddingRight: '15px',
  background: '#2A5769',
  justifyContent: 'space-between',
  alignItems: 'center',
  display: 'inline-flex',
};

const logoContainer = {
  position: 'relative',
  background: 'rgba(255, 255, 255, 0)',
};

const logoElement = {

  left: '0px',
  top: '0px',
  position: 'absolute',
  background: 'white',
};

const logoImage = {
  width: '53px',
  height: '51px',
};

const contactContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  gap: '7px',
  display: 'flex',
};

const contactText = {
  color: '#EFEDEF',
  fontSize: '12px',
  fontFamily: 'Montserrat',
  fontWeight: '500',
  wordWrap: 'break-word',
};

const contactLines = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '1px',
  display: 'inline-flex',
};

const contactLine = {
  width: '15px',
  height: '1px',
  background: '#EFEDEF',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
};

export default Header;
