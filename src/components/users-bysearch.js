import React from "react";

export const UsersBySearch = ({ searchUsername, users }) => {
  // console.log("UserBySearch_response length:::", response.length);
  // console.log("UserBySearch_searchUsername length:::", searchUsername.length);
  // if (response.length === 0) return null;

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

  console.log("userTable: ", userTable);
  console.log("UserRow - UserBySearch.js :", UserRow);

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
