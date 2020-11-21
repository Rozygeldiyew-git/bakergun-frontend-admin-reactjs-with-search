import React from "react";

const CreateUserBiodata = ({ onChangeFormUserBiodata, createUserBiodata }) => {
  //
  //debugging
  console.log(
    "\n",
    "TEST CREATE_USER_BIODATA PARAMETERS 1 (onChangeFormUserBiodata)",
    onChangeFormUserBiodata,
    "\n\n"
  );
  console.log(
    "\n",
    "TEST CREATE_USER_BIODATA PARAMETERS 2 (createUserBiodata)",
    createUserBiodata,
    "\n\n"
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2>Create User Biodata</h2>
          <form onSubmit={createUserBiodata}>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputFullname">Fullname</label>
                <input
                  type="text"
                  onChange={(e) => onChangeFormUserBiodata(e)}
                  className="form-control"
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
                  className="form-control"
                  name="sex"
                  id="sex"
                  aria-describedby="sexHelp"
                  placeholder="male or female"
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-md-12">
                <label htmlFor="exampleInputJobs">Jobs</label>
                <input
                  type="jobs"
                  onChange={(e) => onChangeFormUserBiodata(e)}
                  className="form-control"
                  name="jobs"
                  id="jobs"
                  aria-describedby="jobsHelp"
                  placeholder="********"
                />
              </div>
            </div>
            <button
              // type="button"
              // onClick={(e) => createUserBiodata()}
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

export default CreateUserBiodata;
