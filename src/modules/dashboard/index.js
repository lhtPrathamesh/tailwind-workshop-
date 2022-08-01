import React, { Component } from "react";
import Sidebar from "../sidebar/index";
import DashboardComponent from "./dashboard";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="w-screen h-screen flex overflow-x-hidden">
        <Sidebar />
        <DashboardComponent />
      </div>
    );
  }
}

export default Dashboard;
