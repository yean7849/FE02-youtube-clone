import React from 'react';
import HomeButton from './Homebutton';
import SearchBar from './SearchBar';
import SignUpMain from './SignUpMain';
import Login from './Login';

const Header = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const authenticationContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const authenticationItemStyle = {
    marginLeft: '10px',
  };
  return (
    <div>
      <div style={containerStyle}>
        <div>
          <HomeButton />
        </div>
        <div>
          <SearchBar />
        </div>

        <div style={authenticationContainerStyle}>
          <SignUpMain style={authenticationItemStyle} />
          <Login style={authenticationItemStyle} />
        </div>
      </div>
    </div>
  );
};

export default Header;
