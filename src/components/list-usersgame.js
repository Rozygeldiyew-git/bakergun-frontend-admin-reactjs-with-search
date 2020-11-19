import React, { useState } from "react";
// import MyVerticallyCenteredModal from "./modals";
import { Button, Modal } from "react-bootstrap";
import UsersDataServices from "../services/service-users";

export const ListUsersGame = ({
  userGame,
  usersGame,
  onChangeFormUserGame,
}) => {
  console.log(
    "\n",
    "list-usersgame.js_usersGame length:::",
    usersGame.length,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST LIST_USERS_GAME PARAMETERS 1 (usersGame)",
    usersGame,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST LIST_USERS_GAME PARAMETERS 3 (onChangeFormUserGame)",
    onChangeFormUserGame,
    "\n\n"
  );

  if (usersGame.length === 0) return null;

  const UserGameRow = (usergame) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateUserGame = () => {
      UsersDataServices.updateOneUserGame(usergame.user_id, userGame)
        .then((response) => {
          this.setState({
            usersGame: response.data,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };

    // console.log(
    //   "\n",
    //   "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 1 (usergame)",
    //   usergame,
    //   "\n\n"
    // );
    console.log(
      "\n",
      "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 2 (usergame.user_id):",
      usergame.user_id,
      "\n\n"
    );
    console.log(
      "\n",
      "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 2 (updateUserGame):",
      updateUserGame,
      "\n\n"
    );

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
          <button
            onClick={handleShow}
            className="btn btn-success"
            type="button"
            title="edit"
          >
            ✒️
          </button>
          <Modal
            show={show}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={handleClose}
          >
            <form onSubmit={updateUserGame}>
              {/* <form> */}
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Update User Game
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="exampleInputUsername">Username</label>
                    <input
                      type="text"
                      onChange={(e) => onChangeFormUserGame(e)}
                      className="form-control"
                      name="username"
                      id="username"
                      aria-describedby="usernameHelp"
                      placeholder="username"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="exampleInputEmail">Email</label>
                    <input
                      type="email"
                      onChange={(e) => onChangeFormUserGame(e)}
                      className="form-control"
                      name="email"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="email@email.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-md-12">
                    <label htmlFor="exampleInputPassword">Password</label>
                    <input
                      type="password"
                      onChange={(e) => onChangeFormUserGame(e)}
                      className="form-control"
                      name="password"
                      id="password"
                      aria-describedby="passwordHelp"
                      placeholder="********"
                    />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button type="submit">Create</Button>
                <Button onClick={handleClose}>Close</Button>
              </Modal.Footer>
            </form>
          </Modal>
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

  const usersGameTable = usersGame.map((usergame) => UserGameRow(usergame));

  // console.log(
  //   "\n",
  //   "list-usersgame.js_usersGameTable: \n\n",
  //   usersGameTable,
  //   "\n\n"
  // );
  // console.log("\n", "list-usersgame.js_userGameRow: \n\n", UserGameRow, "\n\n");

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
