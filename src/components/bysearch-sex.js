import React from "react";

export const BySearchSex = ({ searchUserBiodataTable, filteredSex }) => {
  //
  //Debugging
  console.log(
    "\n",
    "userbiodata-bysearch.js_filteredSex length:::",
    filteredSex.length,
    "\n\n"
  );
  console.log(
    "\n",
    "userbiodata-bysearch.js_searchUserBiodataTable length:::",
    searchUserBiodataTable.length,
    "\n\n"
  );

  if (filteredSex.length === 0) return null;

  const UserRow = (userbiodata) => {
    return (
      <tr
        key={userbiodata.user_game_biodata_id}
        className={userbiodata.user_game_biodata_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{userbiodata.user_game_biodata_id}</td>
        <td>{userbiodata.fullname}</td>
        <td>{userbiodata.sex}</td>
        <td>{userbiodata.jobs}</td>
      </tr>
    );
  };

  const userTable = filteredSex.map((userbiodata) => UserRow(userbiodata));

  //
  //Debugging
  // console.log("\n", "bysearch-sex.js_userTable: \n\n", userTable, "\n\n");
  // console.log("\n", "bysearch-sex.js_UserRow: \n\n", UserRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users Biodata Filtered By Sex </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Fullname</th>
            <th>Sex</th>
            <th>Jobs</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
