import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './about';
import Menu from "./menu";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header"

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: true,
      menu: false,
      contact: false,
    };
  }

  // handleClick(i) {
  //   this.setState({
  //     about: true,
  //     menu: false,
  //     contact: false,
  //   });
  // }

  render() {
      return (
        <div className="content">
          <Header />
          <About />
          <Menu />
          <Contact />
          <Footer />
        </div>
      );
    };

}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);

