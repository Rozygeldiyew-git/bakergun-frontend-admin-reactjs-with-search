import React from "react";

export const BySearchFullname = ({
  searchUserBiodataTable,
  filteredFullname,
}) => {
  //
  //Debugging
  console.log(
    "\n",
    "bysearch-fullname.js_filteredFullname length:::",
    filteredFullname.length,
    "\n\n"
  );
  console.log(
    "\n",
    "bysearch-fullname.js_searchUserBiodataTable length:::",
    searchUserBiodataTable.length,
    "\n\n"
  );

  if (filteredFullname.length === 0) return null;

  const UserRow = (userbiodata) => {
    return (
      <tr
        key={userbiodata.user_game_biodata_id}
        className={userbiodata.user_game_biodata_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{userbiodata.user_game_biodata_id}</td>
        <td>{userbiodata.fullname}</td>
        <td>{userbiodata.user_id}</td>
      </tr>
    );
  };

  const userTable = filteredFullname.map((userbiodata) => UserRow(userbiodata));

  //
  //Debugging
  // console.log("\n", "bysearch-fullname.js_userTable: \n\n", userTable, "\n\n");
  // console.log("\n", "bysearch-fullname.js_UserRow: \n\n", UserRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users Biodata Filtered By Fullname </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Biodata Id</th>
            <th>Fullname</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
