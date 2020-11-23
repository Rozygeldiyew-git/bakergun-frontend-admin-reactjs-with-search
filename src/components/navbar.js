import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarTop extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#000" }}>
        <nav className="navbar navbar-expand-xl py-3">
          <div className=" container-xl container-md container-sm">
            <div className="h5 text-white font-weight-bolder navbar-brand">
              <a href="/" className="anchor-home-change-bletter">
                <div className="home-bletter-container">
                  <div className=" bletter-container">
                    <svg
                      id="bletter-logo-bakergun-admin"
                      width="14"
                      height="12.3"
                      viewBox="0 0 297 261"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 261V0H165.516C207.453 0 238.391 6.06364 258.328 18.1909C278.266 30.3182 288.234 47.7182 288.234 70.3909C288.234 85.1545 282.562 97.9409 271.219 108.75C259.875 119.559 242.516 126.282 219.141 128.918V129.314C245.266 131.95 264.687 138.936 277.406 150.273C290.469 161.345 297 174.791 297 190.609C297 213.018 286.516 230.418 265.547 242.809C244.922 254.936 214.156 261 173.25 261H0ZM85.5937 106.773H150.047C181.672 106.773 197.484 97.2818 197.484 78.3C197.484 59.3182 181.672 49.8273 150.047 49.8273H85.5937V106.773ZM85.5937 213.15H158.297C190.266 213.15 206.25 203.395 206.25 183.886C206.25 164.905 190.266 155.414 158.297 155.414H85.5937V213.15Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div className="home-container">
                    <svg
                      id="home-logo-bakergun-admin"
                      width="18"
                      height="19.57"
                      viewBox="0 0 465 419"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M238.32 2.495C234.841 -0.831661 229.36 -0.831661 225.881 2.49497L2.79838 215.793C-3.06752 221.402 0.902327 231.298 9.01811 231.298H55.6004V397.548C55.6004 409.146 65.0024 418.548 76.6004 418.548H168.6V345.548C168.6 341.682 171.734 338.548 175.6 338.548H289.6C293.466 338.548 296.6 341.682 296.6 345.548V418.548H387.6C399.198 418.548 408.6 409.146 408.6 397.548V231.298H455.183C463.298 231.298 467.268 221.402 461.402 215.793L238.32 2.495Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
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
