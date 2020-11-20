import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="modal" style={{ display: "block", zIndex: "-2" }}>
        <div className="modal-dialog modal-md modal-lg modal-xl modal-dialog-centered">
          <div className="modal-content p-5" style={{ border: "unset" }}>
            <div className="col mr-auto">
              {" "}
              <h1 className="text-center">
                ~ 🏠 Home Isn't Place, it's a ❤️ feeling ~
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
