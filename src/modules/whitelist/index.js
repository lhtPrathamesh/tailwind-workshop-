import React, { Component } from "react";
import WhitelistComponent from "./whitelist";
import Sidebar from "../sidebar/index";

class Whitelist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="w-screen h-screen flex overflow-x-hidden">
        <Sidebar />
        <WhitelistComponent />
      </div>
    );
  }
}

export default Whitelist;
