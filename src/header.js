import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">
        Treat <br /> Factory
      </h1>
      <nav className="navContainer">
        <button className="aboutLink navBar selectedPage">
          about
        </button>

        <button className="menuLink navBar">
          menu
        </button>

        <button className="contactLink navBar">
          contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
