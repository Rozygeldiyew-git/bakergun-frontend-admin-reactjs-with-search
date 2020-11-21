import React, { Component } from "react";
import "./assets/scss/style.scss";
import "./App.css";
import UsersList from "./components/users-game";

import LogoBakergun from "./assets/icons/logo-bakergun-admin.png";

import { Route, Switch, Link } from "react-router-dom";
import UsersHistoryList from "./components/users-history";
import UsersBiodataList from "./components/users-biodata";
import Home from "./components";
import { Footer } from "./components/footer";
import NavbarTop from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div className="bakergun-admin">
        <Switch>
          <Route exact path="/">
            <NavbarTop></NavbarTop>
            <div className="container my-5">
              <Home></Home>
            </div>
          </Route>
          <Route exact path="/users-game">
            <NavbarTop></NavbarTop>
            <div className="container my-5">
              <UsersList />
            </div>
            <Footer></Footer>
          </Route>
          <Route exact path="/users-game-biodata">
            <NavbarTop></NavbarTop>
            <div className="container my-5">
              <UsersBiodataList />
            </div>
            <Footer></Footer>
          </Route>
          <Route exact path="/users-game-history">
            <NavbarTop></NavbarTop>
            <div className="container my-5">
              <UsersHistoryList />
            </div>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
