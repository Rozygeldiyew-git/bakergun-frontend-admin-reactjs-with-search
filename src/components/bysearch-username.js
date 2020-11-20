import React from "react";

export const BySearchUsername = ({ searchUserGameTable, filteredUsername }) => {
  console.log(
    "\n",
    "bysearch-username.js_filteredUsername length:::",
    filteredUsername.length,
    "\n\n"
  );
  console.log(
    "\n",
    "bysearch-username.js_searchUsername length:::",
    searchUserGameTable.length,
    "\n\n"
  );
  if (filteredUsername.length === 0) return null;

  const UserRow = (usergame) => {
    return (
      <tr
        key={usergame.user_id}
        className={usergame.user_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{usergame.user_id}</td>
        <td>{usergame.username}</td>
        <td>{usergame.email}</td>
        <td>{usergame.password}</td>
      </tr>
    );
  };

  const userTable = filteredUsername.map((usergame) => UserRow(usergame));

  console.log("\n", "bysearch-username.js_userTable: \n\n", userTable, "\n\n");
  console.log("\n", "bysearch-username.js_UserRow: \n\n", UserRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users Game Filtered By Username </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
