import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "../pages/List";
import View from "../pages/View";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { Link } from "react-router-dom";

export default class extends React.Component {
  public render() {
    return (
      <Router>
        <ul className="gnb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
        </ul>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/list" component={List} />
          <Route path="/view" component={View} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
