import React from "react";

export const BySearchJobs = ({ searchUserBiodataTable, filteredJobs }) => {
  //
  //Debugging
  console.log(
    "\n",
    "bysearch-jobs.js_filteredJobs length:::",
    filteredJobs.length,
    "\n\n"
  );
  console.log(
    "\n",
    "bysearch-jobs.js_searchUserBiodataTable length:::",
    searchUserBiodataTable.length,
    "\n\n"
  );

  if (filteredJobs.length === 0) return null;

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

  const userTable = filteredJobs.map((userbiodata) => UserRow(userbiodata));

  //
  //Debugging
  // console.log("\n", "bysearch-jobs.js_userTable: \n\n", userTable, "\n\n");
  // console.log("\n", "bysearch-jobs.js_UserRow: \n\n", UserRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users Biodata Filtered By Jobs </h4>
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
