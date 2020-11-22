import apiAdmin from "./http-service";

class UsersDataServices {
  //
  //User Game
  createUserGame(userGame) {
    return apiAdmin.post("/user-game", userGame);
  }

  getAllUserGame() {
    return apiAdmin.get("/user-game");
  }

  deleteOneUserGame(userid, username) {
    return apiAdmin.delete(`/user-game/${userid}?username=${username}`);
  }

  updateOneUserGame(userid, userGame) {
    return apiAdmin.put(`/user-game/${userid}`, userGame);
  }

  changeOneUserGamePassword(userid, userGamePassword) {
    return apiAdmin.put(`/user-game-password/${userid}`, userGamePassword);
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

  //
  //User Biodata
  createUserBiodata(userBiodata) {
    return apiAdmin.post("/user-game-biodata", userBiodata);
  }

  getAllUserBiodata() {
    return apiAdmin.get("/user-game-biodata");
  }

  deleteOneUserBiodata(userBiodataId, fullname) {
    return apiAdmin.delete(
      `/user-game-biodata/${userBiodataId}?fullname=${fullname}`
    );
  }
  updateOneUserBiodata(userBiodataId, userBiodata) {
    return apiAdmin.put(`/user-game-biodata/${userBiodataId}`, userBiodata);
  }

  searchByFullname(fullname) {
    return apiAdmin.get(`/user-game-biodata?fullname=${fullname}`);
  }

  searchBySex(sex) {
    return apiAdmin.get(`/user-game-biodata?sex=${sex}`);
  }

  searchByJobs(jobs) {
    return apiAdmin.get(`/user-game-biodata?jobs=${jobs}`);
  }

  //
  //User History
  createUserHistory(userHistory) {
    return apiAdmin.post("/user-game-history", userHistory);
  }

  getAllUserHistory() {
    return apiAdmin.get("/user-game-history");
  }

  deleteOneUserHistory(userHistoryId, score) {
    return apiAdmin.delete(
      `/user-game-history/${userHistoryId}?score=${score}`
    );
  }
  updateOneUserHistory(userHistoryId, userHistory) {
    return apiAdmin.put(`/user-game-history/${userHistoryId}`, userHistory);
  }

  searchByScore(score) {
    return apiAdmin.get(`/user-game-history?score=${score}`);
  }

  searchByComment(comment) {
    return apiAdmin.get(`/user-game-history?comment=${comment}`);
  }
}

export default new UsersDataServices();
