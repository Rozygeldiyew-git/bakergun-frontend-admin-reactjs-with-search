import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import UsersDataServices from "../services/service-users";

export const ListUsersBiodata = ({
  userBiodata,
  usersBiodata,
  onChangeFormUserBiodata,
  onChangeDeleteFullname,
  deleteValue,
}) => {
  //
  //Debugging
  console.log(
    "\n",
    "list-users-biodata.js_usersBiodata length:::",
    usersBiodata.length,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST LIST_USERS_BIODATA PARAMETERS 1 (userBiodata)",
    userBiodata,
    "\n\n"
  );
  // console.log(
  //   "\n",
  //   "TEST LIST_USERS_BIODATA PARAMETERS 2 (usersBiodata)",
  //   usersBiodata,
  //   "\n\n"
  // );
  // console.log(
  //   "\n",
  //   "TEST LIST_USERS_BIODATA PARAMETERS 3 (onChangeFormUserBiodata)",
  //   onChangeFormUserBiodata,
  //   "\n\n"
  // );
  // console.log(
  //   "\n",
  //   "TEST LIST_USERS_BIODATA PARAMETERS 4 (onChangeDeleteFullname)",
  //   onChangeDeleteFullname,
  //   "\n\n"
  // );
  // console.log(
  //   "\n",
  //   "TEST LIST_USERS_BIODATA PARAMETERS 5 (deleteValue)",
  //   deleteValue,
  //   "\n\n"
  // );

  if (usersBiodata.length === 0) return null;

  const UserBiodataRow = (userbiodata) => {
    //
    // aksi mancing
    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

    const updateUserBiodata = () => {
      UsersDataServices.updateOneUserBiodata(
        userbiodata.user_game_biodata_id,
        userBiodata
      )
        .then((response) => {
          this.setState({
            usersBiodata: response.data,
          });
        })
        .catch((e) => {
          console.log(e);
        });

      //
      //Debugging
      console.log(
        "\n",
        "TEST LIST_USERS_BIODATA-USER_BIODATA_ROW PARAMETERS 1 ON updateOneUserBiodata (userbiodata.user_game_biodata_id):",
        userbiodata.user_game_biodata_id,
        "\n\n"
      );
      console.log(
        "\n",
        "TEST LIST_USERS_BIODATA-USER_BIODATA_ROW PARAMETERS 2 ON updateOneUserBiodata(userBiodata):",
        userBiodata,
        "\n\n"
      );
    };

    const deleteUserBiodata = () => {
      UsersDataServices.deleteOneUserBiodata(
        userbiodata.user_game_biodata_id,
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

      //
      //Debugging
      console.log(
        "\n",
        "TEST LIST_USERS_BIODATA-USER_BIODATA_ROW PARAMETERS 1 ON deleteOneUserBiodata (userbiodata.user_game_biodata_id):",
        userbiodata.user_game_biodata_id,
        "\n\n"
      );
      console.log(
        "\n",
        "TEST LIST_USERS_BIODATA-USER_BIODATA_ROW PARAMETERS 2 ON deleteOneUserBiodata(deleteValue):",
        deleteValue,
        "\n\n"
      );
    };

    //
    //Debugging
    // console.log(
    //   "\n",
    //   "TEST LIST_USERS_BIODATA-USER_BIODATA_ROW FUNCTION 1 (updateUserBiodata):",
    //   updateUserBiodata,
    //   "\n\n"
    // );
    // console.log(
    //   "\n",
    //   "TEST LIST_USERS_BIODATA-USER_BIODATA_ROW FUNCTION 2 (deleteUserBiodata):",
    //   deleteUserBiodata,
    //   "\n\n"
    // );

    return (
      <tr
        key={userbiodata.user_game_biodata_id}
        className={userbiodata.user_game_biodata_id % 2 === 0 ? "odd" : "even"}
      >
        <td>{userbiodata.user_game_biodata_id}</td>
        <td>{userbiodata.user_id}</td>
        <td>{userbiodata.fullname}</td>
        <td>{userbiodata.sex}</td>
        <td>{userbiodata.jobs}</td>
        <td>
          <div className="input-group-append justify-content-between">
            <button
              onClick={handleShow}
              className="btn btn-warning stabilo-warning font-weight-bold"
              type="button"
              title="edit"
            >
              <span className="emoji-30"> ✒️ </span>Update
            </button>

            <button
              onClick={handleShowDelete}
              className="btn btn-danger stabilo-danger font-weight-bold"
              type="button"
              title="destroy or burn"
            >
              <span className="emoji-30">🔥️</span>Destroy
            </button>
            <Modal
              show={showDelete}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              onHide={handleCloseDelete}
            >
              <form onSubmit={deleteUserBiodata}>
                <Modal.Header>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Type <strong>{userbiodata.fullname}</strong> below for
                    destroy this row:
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="input-group col-lg p-0">
                    <input
                      type="search"
                      className="form-control form-control-danger ds-input"
                      placeholder={"type " + userbiodata.fullname + " here.."}
                      value={deleteValue}
                      onChange={onChangeDeleteFullname}
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
          <form onSubmit={updateUserBiodata}>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Update User Biodata
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputFullname">Fullname</label>
                  <input
                    type="text"
                    onChange={(e) => onChangeFormUserBiodata(e)}
                    className="form-control form-control-warning"
                    name="fullname"
                    id="fullname"
                    aria-describedby="fullnameHelp"
                    placeholder="fullname"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputSex">Sex</label>
                  <input
                    type="sex"
                    onChange={(e) => onChangeFormUserBiodata(e)}
                    className="form-control form-control-warning"
                    name="sex"
                    id="sex"
                    aria-describedby="sexHelp"
                    placeholder="sex@sex.com"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputJobs">Jobs</label>
                  <input
                    type="jobs"
                    onChange={(e) => onChangeFormUserBiodata(e)}
                    className="form-control form-control-warning"
                    name="jobs"
                    id="jobs"
                    aria-describedby="jobsHelp"
                    placeholder="********"
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

  const usersBiodataTable = usersBiodata.map((userbiodata) =>
    UserBiodataRow(userbiodata)
  );

  //
  //Debugging
  // console.log(
  //   "\n",
  //   "list-users-biodata.js_userBiodataRow: \n\n",
  //   UserBiodataRow,
  //   "\n\n"
  // );
  // console.log(
  //   "\n",
  //   "list-users-biodata.js_usersBiodataTable: \n\n",
  //   usersBiodataTable,
  //   "\n\n"
  // );

  return (
    <div className="col-md-8 col-8 mt-4">
      <h4>Users Biodata </h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Biodata Id</th>
            <th>User Id</th>
            <th>Fullname</th>
            <th>Sex</th>
            <th>Jobs</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>{usersBiodataTable}</tbody>
      </table>
    </div>
  );
};
