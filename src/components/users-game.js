import React, { Component } from "react";
import UsersDataServices from "../services/service-users";
import { BySearchUsername } from "./bysearch-username";
import { BySearchEmail } from "./bysearch-email";
// import { Footer } from "./footer";
import { ListUsersGame } from "./list-users-game";
import CreateUserGame from "./create-user-game";
import { MonitorUserGame } from "./monitor-user-game";
import Fade from "react-reveal/Fade";

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
      passwordValue: "",
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
      //
      //Debugging
      console.log(
        "\n",
        "🧪 TEST USERS-GAME.JS:",
        "\n   ✅ Conditions status of componentDidUpdate:",
        true,
        "\n   ✅ Value of prevState:",
        prevState.numberOfUsersGameTable,
        "\n   ✅ Value of this.state:",
        this.state.numberOfUsersGameTable,
        "\n   ✅ Value of prevProps:",
        prevProps,
        "\n\n"
      );

      // UsersDataServices.getAllUserGame(this.state.usersGame).then(
      //   (response) => {
      //     this.setState({ usersGame: response.data });
      //   }
      // );

      this.setState({
        numberOfUsersGameTable: this.state.numberOfUsersGameTable,
      });
    } else {
      //
      //Debuging
      console.log(
        "\n",
        "🧪 TEST USERS-GAME.JS:",
        "\n   ✅ Conditions status of componentDidUpdate:",
        false,
        "\n\n"
      );
    }
  }

  onChangeSearchUsername(e) {
    const searchUserGameTable = e.target.value;

    this.setState({
      searchUserGameTable: searchUserGameTable,
    });

    //
    //Debugging
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

    //
    //Debugging
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

    //
    //Debugging
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

      //
      //Debugging
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

        //
        //Debugging
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

        //
        //Debugging
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

        //
        //Debugging
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
      "🎮 users-game.js_render: \n",
      " \n\n   ✅ userGame:",
      userGame,
      " \n\n   ✅ usersGame:",
      usersGame,
      " \n\n   ✅ filteredUsername:",
      filteredUsername,
      " \n\n   ✅ filteredEmail:",
      filteredEmail,
      " \n\n   ✅ searchUserGameTable:",
      searchUserGameTable,
      " \n\n   ✅ show:",
      show,
      " \n\n   ✅ numberOfUsersGameTable:",
      numberOfUsersGameTable,
      " \n\n   ✅ deleteValue:",
      deleteValue,
      " \n\n"
    );
    return (
      <div className="dashboard">
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
                <div className="col-9 p-0 input-group">
                  <input
                    type="search"
                    className="form-control ds-input p-2"
                    placeholder="type email or username..."
                    value={searchUserGameTable}
                    onChange={this.onChangeSearchUsername}
                  />
                </div>
                <div className="input-group-append p-0 m-0">
                  <button
                    className="san-button-offset btn btn-success ml-1"
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
            <Fade>
              <ListUsersGame
                deleteValue={deleteValue}
                userGame={userGame}
                usersGame={usersGame}
                onChangeDeleteUsername={this.onChangeDeleteUsername}
                onChangeFormUserGame={this.onChangeFormUserGame}
              ></ListUsersGame>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}
