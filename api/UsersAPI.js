import BaseAPI from "./BaseAPI";

class UsersAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/users/" + id + "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axios.post("/users/edit" + "/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axios.post("/users/add" + "/?"+(new Date().getTime()), data);
  }

  delete(data) {
    return this.axios.post("/users/delete" + "/?"+(new Date().getTime()), data);
  }

  auth(data) {
    return this.axiosNoAUTH.post("/auth/token/login" + "/?"+(new Date().getTime()), data);
  }
}

export default new UsersAPI();
