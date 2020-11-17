import React, { Component } from "react";
import UsersDataServices from "../services/service-users";
import { UsersBySearch } from "./users-bysearch";

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

    console.log("users-list.js_onChangeSearchUsername: ", searchUsername);
  }

  getUsers() {
    UsersDataServices.getAll()
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log("users-list.js_getUsers: ", response.data);
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

    console.log("users-list.js_setActiveUser: ", user, index);
  }

  searchUsername(e) {
    UsersDataServices.searchByUsername(this.state.searchUsername)
      .then((response) => {
        this.setState({
          users: response.data,
        });
        console.log("userlist.js_searchUsername: ", response);
      })
      .catch((e) => {
        console.log(e);
      });

    e.preventDefault();
  }

  render() {
    const { users, searchUsername, nowUser, nowIndex } = this.state;

    console.log(
      "user-list.js_render: ",
      users,
      searchUsername,
      nowUser,
      nowIndex
    );
    return (
      <div className="container">
        <div className="list row">
          <form className="col-md-8" onSubmit={this.searchUsername}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="type your search"
                value={searchUsername}
                onChange={this.onChangeSearchUsername}
              />
            </div>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
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
    );
  }
}
