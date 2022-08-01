import React, { Component } from "react";
import LoginComponent from "./login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <LoginComponent />;
  }
}

export default Login;
