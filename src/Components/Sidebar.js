import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div>
        <div className="sidebar">
          <Link className={this.props.page === "" ? "active" : ""} to="./admin">
            Home
          </Link>
          <Link
            to="?page=dorms"
            className={this.props.page === "?page=dorms" ? "active" : ""}
          >
            Dorms
          </Link>
          <Link
            to="?page=category"
            className={this.props.page === "?page=category" ? "active" : ""}
          >
            Category
          </Link>
          <Link to="?page=zzz">Test Error Link</Link>
        </div>
      </div>
    );
  }
}

export default Sidebar;
