import React, { Component } from "react";
import "./assets/scss/style.scss";
import "./App.css";
import UsersList from "./components/users-game";

import LogoBakergun from "./assets/icons/logo-bakergun-admin.png";

import { Route, Switch, Link } from "react-router-dom";
import UsersHistoryList from "./components/users-history";
import UsersBiodataList from "./components/users-biodata";
import Home from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "#000000" }}>
          <nav className="navbar navbar-expand-xl py-3">
            <div className=" container-xl container-md container-sm">
              <div className="h5 text-white font-weight-bolder navbar-brand">
                <a href="/">
                  <img src={LogoBakergun} alt="icon" width="40" />
                </a>
              </div>

              <div className="navbar-nav mr-auto">
                <li className="nav-item pr-5">
                  <Link to={"/users-game"} className="nav-link">
                    Profil
                  </Link>
                </li>
                <li className="nav-item pr-5">
                  <Link to={"/users-game-biodata"} className="nav-link">
                    Biodata
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/users-game-history"} className="nav-link">
                    History
                  </Link>
                </li>
              </div>
            </div>
          </nav>
        </div>
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users-game" component={UsersList} />
            <Route
              exact
              path="/users-game-biodata"
              component={UsersBiodataList}
            />
            <Route
              exact
              path="/users-game-history"
              component={UsersHistoryList}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
