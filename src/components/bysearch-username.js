import React from "react";

export const BySearchUsername = ({ searchUserGameTable, filteredUsername }) => {
  console.log(
    "\n",
    "user-bysearch.js_filteredUsername length:::",
    filteredUsername.length,
    "\n\n"
  );
  console.log(
    "\n",
    "user-bysearch.js_searchUsername length:::",
    searchUserGameTable.length,
    "\n\n"
  );
  if (filteredUsername.length === 0) return null;

  const UserRow = (user) => {
    return (
      <tr
        key={user.user_id}
        className={user.user_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{user.user_id}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
      </tr>
    );
  };

  const userTable = filteredUsername.map((user) => UserRow(user));

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

  // return null;
};
