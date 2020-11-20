import React, { Component } from "react";
import UsersDataServices from "../services/service-users";
import { BySearchUsername } from "./bysearch-username";
import { BySearchEmail } from "./bysearch-email";
import { Header } from "./header";
import { ListUsersGame } from "./list-users-game";
import CreateUserGame from "./create-user-game";
import { MonitorUserGame } from "./monitor-user-game";

export default class UsersList extends Component {
  constructor(props) {
    super(props);

    this.onChangeSearchUsername = this.onChangeSearchUsername.bind(this);
    this.onChangeDeleteUsername = this.onChangeDeleteUsername.bind(this);
    this.onChangeFormUserGame = this.onChangeFormUserGame.bind(this);
    this.searchUserGameTable = this.searchUserGameTable.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.state = {
      userGame: {},
      filteredUsername: [],
      filteredEmail: [],
      usersGame: [],
      searchUserGameTable: "",
      numberOfUsersGameTable: 0,
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
    this.getUsersGame();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.numberOfUsersGameTable !== this.state.numberOfUsersGameTable
    ) {
      console.log(
        "TEST DID Update: ",
        true,
        prevState.numberOfUsersGameTable,
        this.state.numberOfUsersGameTable,
        prevProps
      );

      UsersDataServices.getAllUserGame(this.state.usersGame).then(
        (response) => {
          this.setState({ usersGame: response.data });
        }
      );
    } else {
      console.log("TEST DID Update: ", false);
    }
  }

  onChangeSearchUsername(e) {
    const searchUserGameTable = e.target.value;

    this.setState({
      searchUserGameTable: searchUserGameTable,
    });

    console.log(
      "\n",
      "users-game.js_onChangeSearchUsername: ",
      searchUserGameTable,
      "\n\n"
    );
  }

  onChangeDeleteUsername(e) {
    const deleteValue = e.target.value;

    this.setState({
      deleteValue: deleteValue,
    });

    console.log(
      "\n",
      "users-game.js_onChangeDeleteUsername: ",
      deleteValue,
      "\n\n"
    );
  }

  onChangeFormUserGame = (e) => {
    let userGame = this.state.userGame;

    if (e.target.name === "username") {
      userGame.username = e.target.value;
    } else if (e.target.name === "email") {
      userGame.email = e.target.value;
    } else if (e.target.name === "password") {
      userGame.password = e.target.value;
    }

    this.setState({ userGame });

    console.log("\n", "users-game.js_onChangeFormUserGame: ", userGame, "\n\n");
  };

  createUserGame = () => {
    UsersDataServices.createUserGame(this.state.userGame).then((response) => {
      this.setState({
        numberOfUsersGameTable: this.state.numberOfUsersGameTable + 1,
      });
      // start test line code - apakah prevState harus dideclare dulu disini??
      this.setState((prevState) => {
        return {
          numberOfUsersGameTable: prevState.numberOfUsersGameTable,
        };
      });
      // end test line code
      console.log("\n", "users-game.js_createUserGame: ", response, "\n\n");
    });
  };

  updateUserGame = (userid) => {
    UsersDataServices.updateOneUserGame(userid)
      .then((response) => {
        this.setState({
          usersGame: response.data,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  getUsersGame() {
    UsersDataServices.getAllUserGame()
      .then((response) => {
        this.setState({
          usersGame: response.data,
          numberOfUsersGameTable: response.data.length,
        });
        //test line code start
        // this.setState((prevState) => {
        //   return {
        //     usersGame: response.data,
        //     numberOfUsersGameTable:
        //       prevState.numberOfUsersGameTabler.data.length,
        //   };
        // });
        //test line code end
        console.log("\n", "users-game.js_getUsersGame: ", response, "\n\n");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchUserGameTable(e) {
    UsersDataServices.searchByUsername(this.state.searchUserGameTable)
      .then((response) => {
        this.setState({
          filteredUsername: response.data,
        });
        console.log(
          "\n",
          "users-game.js_searchUsername_searchByUsername: ",
          response,
          "\n\n"
        );
      })
      .catch((e) => {
        console.log(e);
      });

    UsersDataServices.searchByEmail(this.state.searchUserGameTable)
      .then((response) => {
        this.setState({ filteredEmail: response.data });
        console.log(
          "\n",
          "users-game.js_searchUsername_searchByUsername: ",
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
      userGame,
      usersGame,
      filteredUsername,
      filteredEmail,
      searchUserGameTable,

      show,
      numberOfUsersGameTable,
      deleteValue,
    } = this.state;

    console.log(
      "\n",
      "📺 user-list.js_render: \n",
      " \n\n-userGame:",
      userGame,
      " \n\n-usersGame:",
      usersGame,
      " \n\n-filteredUsername:",
      filteredUsername,
      " \n\n-filteredEmail:",
      filteredEmail,
      " \n\n-searchUserGameTable:",
      searchUserGameTable,
      " \n\n-show:",
      show,
      " \n\n"
    );
    return (
      <div className="dashboard">
        {/* <Header /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 mb-4">
              <CreateUserGame
                userGame={userGame}
                onChangeFormUserGame={this.onChangeFormUserGame}
                createUserGame={this.createUserGame}
              ></CreateUserGame>
            </div>
            <div className="col-md-4">
              <MonitorUserGame
                numberOfUsersGameTable={numberOfUsersGameTable}
              ></MonitorUserGame>
              <form
                className="form-inline mt-4"
                onSubmit={this.searchUserGameTable}
              >
                <div className="input-group">
                  <input
                    type="search"
                    className="form-control ds-input p-2"
                    placeholder="type your search.."
                    value={searchUserGameTable}
                    onChange={this.onChangeSearchUsername}
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
            <BySearchUsername
              searchUserGameTable={searchUserGameTable}
              filteredUsername={filteredUsername}
            ></BySearchUsername>
            <BySearchEmail
              searchUserGameTable={searchUserGameTable}
              filteredEmail={filteredEmail}
            ></BySearchEmail>
            <ListUsersGame
              deleteValue={deleteValue}
              userGame={userGame}
              usersGame={usersGame}
              onChangeDeleteUsername={this.onChangeDeleteUsername}
              onChangeFormUserGame={this.onChangeFormUserGame}
            ></ListUsersGame>
          </div>
        </div>
      </div>
    );
  }
}
