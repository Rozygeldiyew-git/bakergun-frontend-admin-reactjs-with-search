import apiAdmin from "./http-service";

class UsersDataServices {
  getAll() {
    return apiAdmin.get("/user-game");
  }

  searchByUsername(username) {
    return apiAdmin.get(`/user-game?username=${username}`);
  }
}

export default new UsersDataServices();
