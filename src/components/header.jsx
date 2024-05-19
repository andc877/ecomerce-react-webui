import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>My React App</h1>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

export default Header;
