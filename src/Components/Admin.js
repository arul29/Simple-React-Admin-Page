import React, { Component } from "react";
import "./../Components/Css/Admin.css";
import Sidebar from "./Sidebar";
import Content from "./Pages/Content";
import Dorms from "./Pages/Dorms";
import Category from "./Pages/Category";
import Error404 from "./Pages/Error404";
import Header from "./Header";
class Admin extends Component {
  render() {
    let data = [1];
    let page = this.props.location.search;
    return (
      <div>
        <Header />
        <Sidebar page={page} />
        {data.map((item, index) => {
          if (page === "") {
            return <Content />;
          } else if (page === "?page=dorms") {
            return <Dorms />;
          } else if (page === "?page=category") {
            return <Category />;
          } else {
            return <Error404 />;
          }
        })}
      </div>
    );
  }
}

export default Admin;
