import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UsersDataServices from "../services/service-users";

export const ListUsersGame = ({
  userGame,
  usersGame,
  onChangeFormUserGame,
  onChangeDeleteUsername,
  deleteValue,
}) => {
  //
  //Debugging
  console.log(
    "\n",
    "list-users-game.js_usersGame length:::",
    usersGame.length,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST LIST_USERS_GAME PARAMETERS 1 (userGame)",
    userGame,
    "\n\n"
  );
  // console.log(
  //   "\n",
  //   "TEST LIST_USERS_GAME PARAMETERS 2 (usersGame)",
  //   usersGame,
  //   "\n\n"
  // );
  // console.log(
  //   "\n",
  //   "TEST LIST_USERS_GAME PARAMETERS 3 (onChangeFormUserGame)",
  //   onChangeFormUserGame,
  //   "\n\n"
  // );
  // console.log(
  //   "\n",
  //   "TEST LIST_USERS_GAME PARAMETERS 4 (onChangeDeleteUsername)",
  //   onChangeDeleteUsername,
  //   "\n\n"
  // );
  // console.log(
  //   "\n",
  //   "TEST LIST_USERS_GAME PARAMETERS 5 (deleteValue)",
  //   deleteValue,
  //   "\n\n"
  // );

  if (usersGame.length === 0) return null;

  const UserGameRow = (usergame) => {
    //
    // aksi mancing
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const handleCloseChangePassword = () => setShowChangePassword(false);
    const handleShowChangePassword = () => setShowChangePassword(true);

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
      //
      //Debuging
      console.log(
        "\n",
        "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 1 ON updateOneUserGame (usergame.user_id):",
        usergame.user_id,
        "\n\n"
      );
      console.log(
        "\n",
        "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 2 updateOneUserGame (userGame):",
        userGame,
        "\n\n"
      );
    };

    const deleteUserGame = () => {
      UsersDataServices.deleteOneUserGame(usergame.user_id, deleteValue)
        .then((response) => {
          this.setState({
            users: response.data,
          });
        })
        .catch((e) => {
          console.log(e);
        });
      //
      //Debuging
      console.log(
        "\n",
        "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 1 ON deleteOneUserGame (usergame.user_id):",
        usergame.user_id,
        "\n\n"
      );
      console.log(
        "\n",
        "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 2 ON deleteOneUserGame (deleteValue):",
        deleteValue,
        "\n\n"
      );
    };

    const changeUserGamePassword = () => {
      UsersDataServices.changeOneUserGamePassword(usergame.user_id, userGame)
        .then((response) => {
          this.setState({
            users: response.data,
          });
        })
        .catch((e) => {
          console.log(e);
        });
      //
      //Debuging
      console.log(
        "\n",
        "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 1 ON deleteOneUserGame (usergame.user_id):",
        usergame.user_id,
        "\n\n"
      );
      console.log(
        "\n",
        "TEST LIST_USERS_GAME-USER_GAME_ROW PARAMETERS 2 ON deleteOneUserGame (deleteValue):",
        deleteValue,
        "\n\n"
      );
    };

    //
    //Debugging
    // console.log(
    //   "\n",
    //   "TEST LIST_USERS_GAME-USER_GAME_ROW FUNCTION 1 (updateUserGame):",
    //   updateUserGame,
    //   "\n\n"
    // );
    // console.log(
    //   "\n",
    //   "TEST LIST_USERS_GAME-USER_GAME_ROW FUNCTION 2 (deleteUserGame):",
    //   deleteUserGame,
    //   "\n\n"
    // );

    return (
      <tr
        key={usergame.user_id}
        className={usergame.user_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{usergame.user_id}</td>
        <td>{usergame.username}</td>
        <td>{usergame.email}</td>
        <td>
          <div className="input-group-append justify-content-between">
            <button
              onClick={handleShow}
              className="btn btn-warning stabilo-warning font-weight-bold"
              type="button"
              title="edit"
            >
              <span className="emoji-30"> ✒️ </span>
              <br />
              Update
            </button>

            <button
              onClick={handleShowDelete}
              className="btn btn-danger stabilo-danger font-weight-bold"
              type="button"
              title="destroy or burn"
            >
              <span className="emoji-30">🔥️</span>
              <br />
              Destroy
            </button>
            <Modal
              show={showDelete}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onHide={handleCloseDelete}
            >
              <form onSubmit={deleteUserGame}>
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Type <strong>{usergame.username}</strong> below for destroy
                    this row:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="input-group col-lg p-0">
                    <input
                      type="search"
                      className="form-control form-control-danger ds-input"
                      placeholder={"type " + usergame.username + " here.."}
                      value={deleteValue}
                      onChange={onChangeDeleteUsername}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="san-button-danger-soft-offset input-group-append ">
                    <button
                      className="san-button-danger-soft-offset btn btn-danger ml-4"
                      type="submit"
                    >
                      Delete
                    </button>
                  </div>
                </Modal.Footer>
              </form>
            </Modal>
            <button
              onClick={handleShowChangePassword}
              className="btn btn-very-danger stabilo-very-danger font-weight-bold"
              type="button"
              title="change password"
            >
              <span className="emoji-30">🗝</span>
              <br />
              Password
            </button>
            <Modal
              show={showChangePassword}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onHide={handleCloseChangePassword}
            >
              <form onSubmit={changeUserGamePassword}>
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Type your<strong> new password</strong> below:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="input-group col-lg p-0">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="form-control form-control-very-danger ds-input"
                      placeholder="********"
                      onChange={(e) => onChangeFormUserGame(e)}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <div className="san-button-very-danger-soft-offset input-group-append ">
                    <button
                      className="san-button-very-danger-soft-offset btn btn-very-danger ml-4"
                      type="submit"
                    >
                      Change
                    </button>
                  </div>
                </Modal.Footer>
              </form>
            </Modal>
          </div>
        </td>
        <Modal
          show={show}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          onHide={handleClose}
        >
          <form onSubmit={updateUserGame}>
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
                    className="form-control form-control-warning"
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
                    className="form-control form-control-warning"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="email@email.com"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="san-button-warning-soft-offset btn btn-warning"
                type="submit"
              >
                Update
              </button>
              <Button className="btn btn-danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </tr>
    );
  };

  const usersGameTable = usersGame.map((usergame) => UserGameRow(usergame));

  //
  //Debugging
  // console.log(
  //   "\n",
  //   "list-users-game.js_usersGameTable: \n\n",
  //   usersGameTable,
  //   "\n\n"
  // );
  // console.log("\n", "list-users-game.js_userGameRow: \n\n", UserGameRow, "\n\n");

  return (
    <div className="col-5 mt-4">
      <h4>Users Game </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{usersGameTable}</tbody>
      </table>
    </div>
  );
};
