import React, { Component } from "react";
import "./Css/Header.css";
class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <a href="" className="logo">
            A D M I N
          </a>
          <div className="header-right">
            <a className="active" href="/">
              Logout
            </a>
            {/* <a href="#contact">Contact</a>
            <a href="#about">About</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
