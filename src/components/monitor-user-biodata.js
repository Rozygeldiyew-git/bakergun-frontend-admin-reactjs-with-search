import React from "react";

export const MonitorUserBiodata = ({ numberOfUsersBiodataTable }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "unset",
        borderRadius: "unset",
        border: "1px solid #016d3b",
      }}
    >
      <div className="card-body display-board">
        <h4>Users Created:</h4>
        <div
          className="number"
          style={{ fontSize: "58px", fontWeight: "bold" }}
        >
          {numberOfUsersBiodataTable}
        </div>
      </div>
    </div>
  );
};
