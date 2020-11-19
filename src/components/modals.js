import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const UserGameModals = (createUserGame, onChangeFormUserGame) => {
  // debugging

  console.log(
    "\n",
    "TEST USER_GAME_MODALS PARAMETERS 2",
    createUserGame,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST USER_GAME_MODALS PARAMETERS 3",
    onChangeFormUserGame,
    "\n\n"
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Modal
      show={show}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={handleClose}
    >
      <form onSubmit={createUserGame}>
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
          <Button>Create</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default UserGameModals;
