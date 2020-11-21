import React from "react";

const CreateUserHistory = ({ onChangeFormUserHistory, createUserHistory }) => {
  //
  //debugging
  console.log(
    "\n",
    "TEST CREATE_USER_HISTORY PARAMETERS 1 (onChangeFormUserHistory)",
    onChangeFormUserHistory,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST CREATE_USER_HISTORY PARAMETERS 2 (createUserHistory)",
    createUserHistory,
    "\n\n"
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2>Create User History</h2>
          <form onSubmit={createUserHistory}>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputScore">Score</label>
                <input
                  type="text"
                  onChange={(e) => onChangeFormUserHistory(e)}
                  className="form-control"
                  name="score"
                  id="score"
                  aria-describedby="scoreHelp"
                  placeholder="99"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputComment">Comment</label>
                <input
                  type="comment"
                  onChange={(e) => onChangeFormUserHistory(e)}
                  className="form-control"
                  name="comment"
                  id="comment"
                  aria-describedby="commentHelp"
                  placeholder="comment.."
                />
              </div>
            </div>
            <button
              // type="button"
              // onClick={(e) => createUserHistory()}
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

export default CreateUserHistory;
