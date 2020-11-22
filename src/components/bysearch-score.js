import React from "react";

export const BySearchScore = ({ searchUserHistoryTable, filteredScore }) => {
  //
  //Debugging
  console.log(
    "\n",
    "bysearch-score.js_filteredScore length:::",
    filteredScore.length,
    "\n\n"
  );
  console.log(
    "\n",
    "bysearch-score.js_searchUserHistoryTable length:::",
    searchUserHistoryTable.length,
    "\n\n"
  );

  if (filteredScore.length === 0) return null;

  const UserRow = (userhistory) => {
    return (
      <tr
        key={userhistory.user_game_history_id}
        className={userhistory.user_game_history_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{userhistory.user_game_history_id}</td>
        <td>{userhistory.score}</td>
        <td>{userhistory.user_id}</td>
      </tr>
    );
  };

  const userTable = filteredScore.map((userhistory) => UserRow(userhistory));

  //
  //Debugging
  // console.log("\n", "bysearch-score.js_userTable: \n\n", userTable, "\n\n");
  // console.log("\n", "bysearch-score.js_UserRow: \n\n", UserRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users History Filtered By Score </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>History Id</th>
            <th>Score</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
