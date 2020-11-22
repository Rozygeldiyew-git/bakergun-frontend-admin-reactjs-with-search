import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogoBakergun from "../assets/icons/logo-bakergun-admin.png";

export default class NavbarTop extends Component {
  render() {
    return (
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
                <Link to="/users-game" className="nav-link f-18">
                  Profil
                </Link>
              </li>
              <li className="nav-item pr-5">
                <Link to="/users-game-biodata" className="nav-link f-18">
                  Biodata
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/users-game-history" className="nav-link f-18">
                  History
                </Link>
              </li>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
