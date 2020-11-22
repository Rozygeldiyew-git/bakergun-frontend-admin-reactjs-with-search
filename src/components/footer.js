import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-muted"
      style={{
        position: "absolute",
        minWidth: "100vw",
        backgroundColor: "#fff",
      }}
    >
      <div className="container-md container-sm py-3 py-md-5">
        <p>
          build with
          <a
            href="https://reactjs.org"
            className="text-success pl-1"
            target="_blank"
            rel="noreferrer"
          >
            reactjs
          </a>
        </p>
        <p className="font-weight-bolder" style={{ fontSize: "10px" }}>
          fork me on
          <a
            href="https://github.com/sanengineer/bakergun-frontend-admin-reactjs-with-search"
            className="text-success pl-1"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </p>
      </div>
    </footer>
  );
};
export { Footer };
