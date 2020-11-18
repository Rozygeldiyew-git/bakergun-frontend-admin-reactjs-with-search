import React from "react";

export const ListUsersGame = ({ usersGame }) => {
  console.log(
    "\n",
    "list-usersgame.js_usersGame length:::",
    usersGame.length,
    "\n\n"
  );

  if (usersGame.length === 0) return null;

  const userGameRow = (usergame) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <tr
        key={usergame.user_id}
        className={usergame.user_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{usergame.user_id}</td>
        <td>{usergame.username}</td>
        <td>{usergame.email}</td>
        <td>{usergame.password}</td>
        <td>
          <button className="btn btn-success" type="button" title="edit">
            ✒️
          </button>
          <button
            className="btn btn-success mt-3"
            type="button"
            title="destroy or burn"
          >
            🔥️
          </button>
        </td>
      </tr>
    );
  };

  const usersGameTable = usersGame.map((usergame) => userGameRow(usergame));

  console.log(
    "\n",
    "list-usersgame.js_usersGameTable: \n\n",
    usersGameTable,
    "\n\n"
  );
  console.log("\n", "list-usersgame.js_userGameRow: \n\n", userGameRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users Game </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{usersGameTable}</tbody>
      </table>
    </div>
  );

  // return null;
};
