import React, { useState } from 'react';

function Menu() {
   
  // Define a state variable to track whether the content is visible
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Define styles for the header and content
  const headerStyles = {
    width: '100%',
    padding: '20px',
    background: '#2A5769',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const contentStyles = {
    width: '100%',
    padding: '15px 20px',
    background: '#2A5769',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    overflow: 'hidden',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: '10px',
    display: isContentVisible ? 'flex' : 'none',
  };

  // Function to toggle the visibility of the content
  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div>
      <div style={headerStyles} onClick={toggleContent}>
        <div>Header Text</div>
        <div>{isContentVisible ? '-' : '+'}</div>
      </div>
      <div style={contentStyles}>
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
      </div>
    </div>
  );
}

export default Menu;

