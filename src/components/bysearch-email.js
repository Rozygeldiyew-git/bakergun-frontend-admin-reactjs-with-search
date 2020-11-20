import React from "react";

export const BySearchEmail = ({ searchUserGameTable, filteredEmail }) => {
  console.log(
    "\n",
    "user-bysearch.js_filteredEmail length:::",
    filteredEmail.length,
    "\n\n"
  );
  console.log(
    "\n",
    "user-bysearch.js_searchUserGameTable length:::",
    searchUserGameTable.length,
    "\n\n"
  );
  if (filteredEmail.length === 0) return null;

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

  const userTable = filteredEmail.map((user) => UserRow(user));

  console.log("\n", "bysearch-email.js_userTable: \n\n", userTable, "\n\n");
  console.log("\n", "bysearch-email.js_UserRow: \n\n", UserRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users Game Filtered By Email </h4>
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
