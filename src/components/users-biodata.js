import React, { Component } from "react";
import UsersDataServices from "../services/service-users";
import { BySearchFullname } from "./bysearch-fullname";
import { BySearchSex } from "./bysearch-sex";
import { BySearchJobs } from "./bysearch-jobs";
import { ListUsersBiodata } from "./list-users-biodata";
import CreateUserBiodata from "./create-user-biodata";
import { MonitorUserBiodata } from "./monitor-user-biodata";

export default class UsersBiodataList extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchFullname = this.onChangeSearchFullname.bind(this);
    this.onChangeDeleteFullname = this.onChangeDeleteFullname.bind(this);
    this.onChangeFormUserBiodata = this.onChangeFormUserBiodata.bind(this);
    this.searchUserBiodataTable = this.searchUserBiodataTable.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      userBiodata: {},
      filteredFullname: [],
      filteredSex: [],
      filteredJobs: [],
      usersBiodata: [],
      searchUserBiodataTable: "",
      numberOfUsersBiodataTable: 0,
      show: false,
      deleteValue: "",
    };
  }

  handleClose(e) {
    this.setState({
      show: false,
    });
  }

  handleShow(e) {
    this.setState({
      show: true,
    });
  }

  componentDidMount() {
    this.getUsersBiodata();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.numberOfUsersBiodataTable !==
      this.state.numberOfUsersBiodataTable
    ) {
      //
      //Debugging
      console.log(
        "\n",
        "🧪 TEST USERS-BIODATA.JS:",
        "\n   ✅ Conditions Status of componentDidUpdate: ",
        true,
        "\n   ✅ Value of prevState:",
        prevState.numberOfUsersBiodataTable,
        "\n   ✅ Value of this.state:",
        this.state.numberOfUsersBiodataTable,
        "\n   ✅ Value of prevProps:",
        prevProps,
        "\n\n"
      );

      UsersDataServices.getAllUserBiodata(this.state.usersBiodata).then(
        (response) => {
          this.setState({ usersBiodata: response.data });
        }
      );
    } else {
      //
      //Debugging
      console.log(
        "\n",
        "🧪 TEST USERS-BIODATA.JS:",
        "\n   ✅ Conditions Status of  componentDidUpdate: ",
        false,
        "\n\n"
      );
    }
  }

  onChangeSearchFullname(e) {
    const searchUserBiodataTable = e.target.value;

    this.setState({
      searchUserBiodataTable: searchUserBiodataTable,
    });

    //
    //Debugging
    console.log(
      "\n",
      "users-biodata.js_onChangeSearchFullname: ",
      searchUserBiodataTable,
      "\n\n"
    );
  }

  onChangeDeleteFullname(e) {
    const deleteValue = e.target.value;

    this.setState({
      deleteValue: deleteValue,
    });

    //
    //Debugging
    console.log(
      "\n",
      "users-biodata.js_onChangeDeleteFullname: ",
      deleteValue,
      "\n\n"
    );
  }

  onChangeFormUserBiodata = (e) => {
    let userBiodata = this.state.userBiodata;

    if (e.target.name === "user_id") {
      userBiodata.user_id = e.target.value;
    } else if (e.target.name === "fullname") {
      userBiodata.fullname = e.target.value;
    } else if (e.target.name === "sex") {
      userBiodata.sex = e.target.value;
    } else if (e.target.name === "jobs") {
      userBiodata.jobs = e.target.value;
    }

    this.setState({ userBiodata });

    //
    //Debugging
    console.log(
      "\n",
      "users-biodata.js_onChangeFormUserBiodata: ",
      userBiodata,
      "\n\n"
    );
  };

  createUserBiodata = () => {
    UsersDataServices.createUserBiodata(this.state.userBiodata).then(
      (response) => {
        this.setState({
          numberOfUsersBiodataTable: this.state.numberOfUsersBiodataTable + 1,
        });
        // start test line code - apakah prevState harus dideclare dulu disini??
        this.setState((prevState) => {
          return {
            numberOfUsersBiodataTable: prevState.numberOfUsersBiodataTable,
          };
        });
        // end test line code

        //
        //Debugging
        console.log(
          "\n",
          "users-biodata.js_createUserBiodata: ",
          response,
          "\n\n"
        );
      }
    );
  };

  updateUserBiodata = (userid) => {
    UsersDataServices.updateOneUserBiodata(userid)
      .then((response) => {
        this.setState({
          usersBiodata: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  getUsersBiodata() {
    UsersDataServices.getAllUserBiodata()
      .then((response) => {
        this.setState({
          usersBiodata: response.data,
          numberOfUsersBiodataTable: response.data.length,
        });
        //test line code start
        // this.setState((prevState) => {
        //   return {
        //     usersBiodata: response.data,
        //     numberOfUsersBiodataTable:
        //       prevState.numberOfUsersBiodataTabler.data.length,
        //   };
        // });
        //test line code end

        //
        //Debugging
        console.log(
          "\n",
          "users-biodata.js_getUsersBiodata: ",
          response,
          "\n\n"
        );
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchUserBiodataTable(e) {
    UsersDataServices.searchByFullname(this.state.searchUserBiodataTable)
      .then((response) => {
        this.setState({
          filteredFullname: response.data,
        });
        console.log(
          "\n",
          "users-biodata.js_searchFullname_searchByFullname: ",
          response,
          "\n\n"
        );
      })
      .catch((e) => {
        console.log(e);
      });

    UsersDataServices.searchBySex(this.state.searchUserBiodataTable)
      .then((response) => {
        this.setState({ filteredSex: response.data });
        console.log(
          "\n",
          "users-biodata.js_searchFullname_searchBySex: ",
          response,
          "\n\n"
        );
      })
      .catch((e) => {
        console.log(e);
      });

    UsersDataServices.searchByJobs(this.state.searchUserBiodataTable)
      .then((response) => {
        this.setState({ filteredJobs: response.data });
        console.log(
          "\n",
          "users-biodata.js_searchFullname_searchByJobs: ",
          response,
          "\n\n"
        );
      })
      .catch((e) => {
        console.log(e);
      });

    e.preventDefault();
  }

  render() {
    const {
      userBiodata,
      usersBiodata,
      filteredFullname,
      filteredSex,
      filteredJobs,
      searchUserBiodataTable,
      show,
      numberOfUsersBiodataTable,
      deleteValue,
    } = this.state;

    //
    //Debugging
    console.log(
      "\n",
      "📊 users-biodata.js_render: \n",
      " \n\n   ✅ userBiodata:",
      userBiodata,
      " \n\n   ✅ usersBiodata:",
      usersBiodata,
      " \n\n   ✅ filteredFullname:",
      filteredFullname,
      " \n\n   ✅ filteredSex:",
      filteredSex,
      " \n\n   ✅ filteredJobs:",
      filteredJobs,
      " \n\n   ✅ searchUserBiodataTable:",
      searchUserBiodataTable,
      " \n\n   ✅ show:",
      show,
      " \n\n   ✅ numberOfUsersBiodataTable:",
      numberOfUsersBiodataTable,
      " \n\n   ✅ deleteValue:",
      deleteValue,
      " \n\n"
    );
    return (
      <div className="dashboard">
        {/* <Header /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-4">
              <CreateUserBiodata
                userBiodata={userBiodata}
                onChangeFormUserBiodata={this.onChangeFormUserBiodata}
                createUserBiodata={this.createUserBiodata}
              ></CreateUserBiodata>
            </div>
            <div className="col-md-4">
              <MonitorUserBiodata
                numberOfUsersBiodataTable={numberOfUsersBiodataTable}
              ></MonitorUserBiodata>
              <form
                className="form-inline mt-4"
                onSubmit={this.searchUserBiodataTable}
              >
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control ds-input p-2"
                    placeholder="type your search.."
                    value={searchUserBiodataTable}
                    onChange={this.onChangeSearchFullname}
                  />
                </div>
                <div className="input-group-append">
                  <button
                    className="san-button-offset btn btn-success ml-4"
                    type="submit"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            <BySearchFullname
              searchUserBiodataTable={searchUserBiodataTable}
              filteredFullname={filteredFullname}
            ></BySearchFullname>
            <BySearchSex
              searchUserBiodataTable={searchUserBiodataTable}
              filteredSex={filteredSex}
            ></BySearchSex>
            <BySearchJobs
              searchUserBiodataTable={searchUserBiodataTable}
              filteredJobs={filteredJobs}
            ></BySearchJobs>
            <ListUsersBiodata
              deleteValue={deleteValue}
              userBiodata={userBiodata}
              usersBiodata={usersBiodata}
              onChangeDeleteFullname={this.onChangeDeleteFullname}
              onChangeFormUserBiodata={this.onChangeFormUserBiodata}
            ></ListUsersBiodata>
          </div>
        </div>
      </div>
    );
  }
}
