import React from "react";

const Footer = () => {
  return (
    <footer
      class="text-muted"
      style={{
        position: "absolute",
        minWidth: "100vw",
        backgroundColor: "#fff",
      }}
    >
      <div class="container-md container-sm py-3 py-md-5">
        <p>
          build with
          <a
            href="https://reactjs.org"
            class="text-success pl-1"
            target="_blank"
            rel="noreferrer"
          >
            reactjs
          </a>
        </p>
        <p class="font-weight-bolder" style={{ fontSize: "10px" }}>
          fork me on
          <a
            href="https://github.com/sanengineer/bakergun-frontend-admin-reactjs-with-search"
            class="text-success pl-1"
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
