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
  console.log(
    "\n",
    "list-list-users-game.js_usersGame length:::",
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
    //
    // aksi mancing
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

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
          <div className="input-group-append justify-content-between">
            <button
              onClick={handleShow}
              className="btn btn-warning"
              type="button"
              title="edit"
            >
              ✒️ Update
            </button>

            <button
              onClick={handleShowDelete}
              className="btn btn-danger"
              type="button"
              title="destroy or burn"
            >
              🔥️ Destroy
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
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputPassword">Password</label>
                  <input
                    type="password"
                    onChange={(e) => onChangeFormUserGame(e)}
                    className="form-control form-control-warning"
                    name="password"
                    id="password"
                    aria-describedby="passwordHelp"
                    placeholder="********"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                className="san-button-warning-soft-offset btn btn-success"
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

  // console.log(
  //   "\n",
  //   "list-list-users-game.js_usersGameTable: \n\n",
  //   usersGameTable,
  //   "\n\n"
  // );
  // console.log("\n", "list-list-users-game.js_userGameRow: \n\n", UserGameRow, "\n\n");

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
};
