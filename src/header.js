import React from 'react';

const Header = () => {
  return (
    <div className="mainContent">
      <header className="header">
        <h1 className="logo">
          Treat <br /> Factory
        </h1>
        <nav className="navContainer">
          <button className="aboutLink navBar selectedPage" value="About" onClick={}>
            about
          </button>

          <button className="menuLink navBar" value="Menu">
            menu
          </button>

          <button className="contactLink navBar" value="Contact">
            contact
          </button>
        </nav>
      </header>
      </div>
  );
};

export default Header;
