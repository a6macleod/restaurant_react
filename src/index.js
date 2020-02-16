import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from "./footer";
// import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Menu from "./menu";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.aboutButtonClick = this.aboutButtonClick.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
    this.contactButtonClick = this.contactButtonClick.bind(this);
    this.state = {currentPage: "about"};
  }

  aboutButtonClick() {
    this.setState({currentPage: "about"});
  }

  menuButtonClick() {
    this.setState({currentPage: "menu"});
  }

  contactButtonClick() {
    this.setState({currentPage: "contact"});
  }

  render() {
    const currentPage = this.state.currentPage;
    let buttons;

    if (currentPage === "about") {
      buttons =
        <div className="buttons">
          <button className="aboutLink navBar selectedPage" value="about" onClick={this.aboutButtonClick}>about</button>
          <button className="menuLink navBar" value="menu" onClick={this.menuButtonClick}>menu</button>
          <button className="contactLink navBar" value="contact" onClick={this.contactButtonClick}>contact</button>
        </div>
    } else if (currentPage === "menu") {
      buttons = 
        <div className="buttons">
          <button className="aboutLink navBar" value="about" onClick={this.aboutButtonClick}>about</button>
          <button className="menuLink navBar selectedPage" value="menu" onClick={this.menuButtonClick}>menu</button>
          <button className="contactLink navBar" value="contact" onClick={this.contactButtonClick}>contact</button>
        </div>
    } else if (currentPage === "contact") {
      buttons =
        <div className="buttons">
          <button className="aboutLink navBar" value="about" onClick={this.aboutButtonClick}>about</button>
          <button className="menuLink navBar" value="menu" onClick={this.menuButtonClick}>menu</button>
          <button className="contactLink navBar selectedPage" value="contact" onClick={this.contactButtonClick}>contact</button>
        </div>
    }
    return (
      <div className="MainContent">
        <div className="mainContent">
          <header className="header">
            <h1 className="logo">
              Treat <br /> Factory
            </h1>
            <nav className="navContainer">
              {buttons}
            </nav>
          </header>
          </div>

        <CurrentContentPage currentPage={currentPage} />
        <Footer />
      </div>
    );
  };
}

function CurrentContentPage(props) {
  const currentPage = props.currentPage;
  let contentPage;

  if (currentPage === "about") {
    return <About />;
  } else if (currentPage === "menu") {
    return <Menu />;
  } else if (currentPage === "contact") {
    return <Contact />;
  }
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

