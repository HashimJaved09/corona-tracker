import React from 'react';
import logo1 from "../images/logo.png";

function Navbar() {
  return(
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/">
            <img src={logo1} className="App-logo" alt="logo" />
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/stats">Stats</a></li>
          <li><a href="/news">News</a></li>
          <li><a href="/quote-of-the-day">Quote of the Day</a></li>
        </ul>
        {/*<button className="btn btn-danger navbar-btn">Button</button>*/}
      </div>
    </nav>
  );
}

export default Navbar;
