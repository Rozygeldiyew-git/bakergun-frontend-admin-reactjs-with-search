import React from "react";

export const UsersBySearch = ({ searchUsername, users }) => {
  console.log("\n", "user-bysearch.js_users length:::", users.length, "\n\n");
  console.log(
    "\n",
    "user-bysearch.js_searchUsername length:::",
    searchUsername.length,
    "\n\n"
  );
  if (users.length === 0) return null;

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

  const userTable = users.map((user) => UserRow(user));

  console.log("\n", "users-bysearch.js_userTable: \n\n", userTable, "\n\n");
  console.log("\n", "users-bysearch.js_UserRow: \n\n", UserRow, "\n\n");

  return (
    <div className="row">
      <div className="col-md-12"></div>
      <h2>Result Search Users Game By Username</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
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
