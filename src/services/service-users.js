import apiAdmin from "./http-service";

class UsersDataServices {
  createUserGame(userGame) {
    return apiAdmin.post("/user-game", userGame);
  }

  getAllUserGame() {
    return apiAdmin.get("/user-game");
  }

  updateOneUserGame(userid, userGame) {
    return apiAdmin.put(`/user-game/${userid}`, userGame);
  }

  searchByUsername(username) {
    return apiAdmin.get(`/user-game?username=${username}`);
  }

  searchByEmail(email) {
    return apiAdmin.get(`/user-game?email=${email}`);
  }

  searchBy(username, email) {
    var queryUsername = "username";
    var qeueryEmail = "email";

    if (username) {
      return apiAdmin.get(`/user-game?${queryUsername}=${username}`);
    } else {
      return apiAdmin.get(`/user-game?${qeueryEmail}=${email}`);
    }
  }
}

export default new UsersDataServices();
