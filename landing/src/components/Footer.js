import React from 'react';

function Footer() {
  return (
    <div>
    <div style={containerStyle}>
      <div style={leftColumnStyle}>
       
          <span style={labelStyle}>Oрганізатори:</span>
        <div style={organizersStyle}>
          <div style={organizerStyle}>Давидова Саша</div>
          <div style={organizerStyle}>Шиманська Іра</div>
          <div style={organizerStyle}>Ковальчук Софія</div>
          <div style={organizerStyle}>Солодуха Микола</div>
        </div>
      </div> 
      <div style={rightColumnStyle}>
        <div style={labelStyle}>Контакти:</div>
        <div style={contactStyle}>+ 380 66 25 04 286</div>
        <div style={contactStyle}>sasha.davydova@keenethics.com</div>
      </div>
      <div style={additionalInfoStyle}>Для партнерів</div>
      
    </div>
    <div style={footer}>
      2023
    </div>
    </div>
         
  );
}

const containerStyle = {
  width: '100%',
  height: '100%',
  padding: '15px',
  background: '#2A5769',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  display: 'flex',
};

const footer = {
  background: '#2A5769',
  color: '#EFEDEF',
  fontSize: '7px',
  fontFamily: 'Montserrat',
  fontWeight:'400',
  wordWrap: 'break-word',
  textAlign: 'center',
  paddingBottom: '15px'
};

const leftColumnStyle = {
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '7px',
  display: 'inline-flex',
};

const labelStyle = {
  color: '#EFEDEF',
  fontSize: '10px',
  fontFamily: 'Montserrat',
  fontWeight: '600',
  wordWrap: 'break-word',
};

const organizersStyle = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '5px',
  display: 'flex',
};

const organizerStyle = {
  alignSelf: 'stretch',
  color: '#EFEDEF',
  fontSize: '7px',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  wordWrap: 'break-word',
};

const rightColumnStyle = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  gap: '5px',
  display: 'inline-flex',
};

const contactStyle = {
  color: '#EFEDEF',
  fontSize: '7px',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  wordWrap: 'break-word',
};

const additionalInfoStyle = {
  color: '#EFEDEF',
  fontSize: '10px',
  fontFamily: 'Montserrat',
  fontWeight: '600',
  wordWrap: 'break-word',
};

export default Footer;
