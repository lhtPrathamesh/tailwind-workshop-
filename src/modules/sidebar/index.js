import React, { Component } from "react";
import SidebarComponent from "./sidebar";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <SidebarComponent />;
  }
}

export default Sidebar;
