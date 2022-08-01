import React, { Component } from "react";
import HomeComponent from "./home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <HomeComponent />;
  }
}

export default Home;
