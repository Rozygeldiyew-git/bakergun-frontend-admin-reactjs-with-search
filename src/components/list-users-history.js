import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UsersDataServices from "../services/service-users";

export const ListUsersHistory = ({
  userHistory,
  usersHistory,
  onChangeFormUserHistory,
  onChangeDeleteScore,
  deleteValue,
}) => {
  console.log(
    "\n",
    "list-list-users-history.js_usersHistory length:::",
    usersHistory.length,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST LIST_USERS_HISTORY PARAMETERS 1 (usersHistory)",
    usersHistory,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST LIST_USERS_HISTORY PARAMETERS 3 (onChangeFormUserHistory)",
    onChangeFormUserHistory,
    "\n\n"
  );

  if (usersHistory.length === 0) return null;

  const UserHistoryRow = (userhistory) => {
    //
    // aksi mancing
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const updateUserHistory = () => {
      UsersDataServices.updateOneUserHistory(
        userhistory.user_game_history_id,
        userHistory
      )
        .then((response) => {
          this.setState({
            usersHistory: response.data,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    };

    const deleteUserHistory = () => {
      UsersDataServices.deleteOneUserHistory(
        userhistory.user_game_history_id,
        deleteValue
      )
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
    //   "TEST LIST_USERS_HISTORY-USER_HISTORY_ROW PARAMETERS 1 (userhistory)",
    //   userhistory,
    //   "\n\n"
    // );
    console.log(
      "\n",
      "TEST LIST_USERS_HISTORY-USER_HISTORY_ROW PARAMETERS 2 (userhistory.user_game_history_id):",
      userhistory.user_game_history_id,
      "\n\n"
    );
    console.log(
      "\n",
      "TEST LIST_USERS_HISTORY-USER_HISTORY_ROW PARAMETERS 2 (updateUserHistory):",
      updateUserHistory,
      "\n\n"
    );

    return (
      <tr
        key={userhistory.user_game_history_id}
        className={userhistory.user_game_history_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{userhistory.user_game_history_id}</td>
        <td>{userhistory.user_id}</td>
        <td>{userhistory.score}</td>
        <td>{userhistory.comment}</td>

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
              className="btn btn-danger "
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
              <form onSubmit={deleteUserHistory}>
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Type <strong>{userhistory.score}</strong> below for destroy
                    this row:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="input-group col-lg p-0">
                    <input
                      type="search"
                      className="form-control form-control-danger ds-input"
                      placeholder={"type " + userhistory.score + " here.."}
                      value={deleteValue}
                      onChange={onChangeDeleteScore}
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
          <form onSubmit={updateUserHistory}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Update User History
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputScore">Score</label>
                  <input
                    type="text"
                    onChange={(e) => onChangeFormUserHistory(e)}
                    className="form-control form-control-warning"
                    name="score"
                    id="score"
                    aria-describedby="scoreHelp"
                    placeholder="score"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputComment">Comment</label>
                  <input
                    type="comment"
                    onChange={(e) => onChangeFormUserHistory(e)}
                    className="form-control form-control-warning"
                    name="comment"
                    id="comment"
                    aria-describedby="commentHelp"
                    placeholder="comment@comment.com"
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

  const usersHistoryTable = usersHistory.map((userhistory) =>
    UserHistoryRow(userhistory)
  );

  // console.log(
  //   "\n",
  //   "list-list-users-history.js_usersHistoryTable: \n\n",
  //   usersHistoryTable,
  //   "\n\n"
  // );
  // console.log("\n", "list-list-users-history.js_userHistoryRow: \n\n", UserHistoryRow, "\n\n");

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users History </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>History Id</th>
            <th>User Id</th>
            <th>Score</th>
            <th>Comment</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{usersHistoryTable}</tbody>
      </table>
    </div>
  );
};
