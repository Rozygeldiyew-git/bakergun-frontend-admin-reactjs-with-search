import React, { Component } from "react";
import UsersDataServices from "../services/service-users";
import { UsersBySearch } from "./users-bysearch";
import { Header } from "./header";

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchUsername = this.onChangeSearchUsername.bind(this);
    this.searchUsername = this.searchUsername.bind(this);

    this.state = {
      users: [],
      searchUsername: "",
      nowUser: null,
      nowIndex: -1,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  //   componentDidUpdate() {
  //     this.searchUsername();
  //   }

  onChangeSearchUsername(e) {
    const searchUsername = e.target.value;

    this.setState({
      searchUsername: searchUsername,
    });

    console.log(
      "\n",
      "users-list.js_onChangeSearchUsername: ",
      searchUsername,
      "\n\n"
    );
  }

  getUsers() {
    UsersDataServices.getAll()
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log("\n", "users-list.js_getUsers: ", response.data, "\n\n");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //   refreshUserList() {
  //     this.getUsers();
  //     this.setState({
  //       nowUser: null,
  //       nowIndex: -1,
  //     });
  //   }

  setActiveUser(user, index) {
    this.setState({
      nowUsers: user,
      nowIndex: index,
    });

    console.log("\n", "users-list.js_setActiveUser: ", user, index);
  }

  searchUsername(e) {
    UsersDataServices.searchByUsername(this.state.searchUsername)
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log("\n", "userlist.js_searchUsername: ", response, "\n\n");
      })
      .catch((e) => {
        console.log(e);
      });

    e.preventDefault();
  }

  render() {
    const { users, searchUsername, nowUser, nowIndex } = this.state;

    console.log(
      "\n",
      "📺 user-list.js_render: \n",
      " \n\n-users:",
      users,
      " \n\n-searchUsername:",
      searchUsername,
      " \n\n-nowUser:",
      nowUser,
      " \n\n-nowIndex:",
      nowIndex,
      " \n\n"
    );
    return (
      <div className="dashboard">
        <Header />
        <div className="container">
          <div className="row">
            <form
              className="form-inline col-md-5"
              onSubmit={this.searchUsername}
            >
              <div className="input-group">
                <input
                  type="search"
                  className="form-control ds-input p-2"
                  placeholder="type your search.."
                  value={searchUsername}
                  onChange={this.onChangeSearchUsername}
                />
              </div>
              <div className="input-group-append">
                <button
                  className="san-button-offset btn btn-success ml-4"
                  type="submit"
                  //   type="button"
                  //   onClick={this.searchUsername}
                >
                  Search
                </button>
              </div>
            </form>

            <UsersBySearch
              searchUsername={this.state.searchUsername}
              users={this.state.users}
            ></UsersBySearch>
            {/* <div className="col-md-6">
          <h4>Users List</h4>

          <ul className="list-group">
            {users &&
              users.map((user, index) => {
                <li
                  className={
                    "list-group-item" + (index === nowIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveUser(user, index)}
                  key={index}
                >
                  {user.username}
                </li>;
              })}
          </ul>
        </div> */}
            {/* <div className="col-md-6">
          {nowUser ? (
            <div>
              <h4>User</h4>
              <div>
                <label>
                  <strong>Username:</strong>
                </label>
                {nowUser.username}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>
                {nowUser.email}
              </div>
              <div>
                <label>
                  <strong>Password:</strong>
                </label>
                {nowUser.password}
              </div>
            </div>
          ) : (
            ""
          )}
        </div> */}
          </div>
        </div>
      </div>
    );
  }
}
