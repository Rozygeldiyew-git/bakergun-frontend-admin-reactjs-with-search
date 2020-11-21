import React from "react";

const CreateUserGame = ({ onChangeFormUserGame, createUserGame }) => {
  //
  //debugging
  console.log(
    "\n",
    "TEST CREATE_USER_GAME PARAMETERS 1 (onChangeFormUserGame)",
    onChangeFormUserGame,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST CREATE_USER_GAME PARAMETERS 2 (createUserGame)",
    createUserGame,
    "\n\n"
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2>Create User Game</h2>
          <form onSubmit={createUserGame}>
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
            <button
              // type="button"
              // onClick={(e) => createUserGame()}
              type="submit"
              className="btn btn-success"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUserGame;
