import React from "react";
import { Router, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router";
import { connect } from "react-redux";
import Main from "./modules/main/index";
import { history } from "./managers/history";
import Dashboard from "./modules/dashboard/index";
import Whitelist from "./modules/whitelist/index";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/"} component={Main} />
        <Route exact path={"/dashboard"} component={Dashboard} />
        <Route exact path={"/whitelist"} component={Whitelist} />
        <Redirect exact from="*" to="/" />
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Routes);
