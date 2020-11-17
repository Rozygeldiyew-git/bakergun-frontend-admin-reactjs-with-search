import React, { Component } from "react";
import "./assets/scss/style.scss";
import "./App.css";
import UsersList from "./components/users-list";

class App extends Component {
  render() {
    return <UsersList />;
  }
}

export default App;
