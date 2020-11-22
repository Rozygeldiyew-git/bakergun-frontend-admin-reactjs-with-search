import React from "react";

export const BySearchComment = ({
  searchUserHistoryTable,
  filteredComment,
}) => {
  //
  //Debugging
  console.log(
    "\n",
    "bysearch-commnet.js_filteredComment length:::",
    filteredComment.length,
    "\n\n"
  );
  console.log(
    "\n",
    "bysearch-comment.js_searchUserHistoryTable length:::",
    searchUserHistoryTable.length,
    "\n\n"
  );

  if (filteredComment.length === 0) return null;

  const UserRow = (userhistory) => {
    return (
      <tr
        key={userhistory.user_game_history_id}
        className={userhistory.user_game_history_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{userhistory.user_game_history_id}</td>
        <td>{userhistory.comment}</td>
        <td>{userhistory.user_id}</td>
      </tr>
    );
  };

  const userTable = filteredComment.map((userhistory) => UserRow(userhistory));

  //
  //Debugging
  // console.log("\n", "bysearch-comment.js_userTable: \n\n", userTable, "\n\n");
  // console.log("\n", "bysearch-comment.js_UserRow: \n\n", UserRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users History Filtered By Comment </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>History Id</th>
            <th>Comment</th>
            <th>User Id</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
