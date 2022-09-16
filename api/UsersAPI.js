import BaseAPI from "./BaseAPI";

class UsersAPI extends BaseAPI {
  get_all() {
    return this.axios.get("/auth/users/get_users" + "/?"+(new Date().getTime()));
  }

  get(id) {
    return this.axios.get("/users/" + id + "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axios.post("/users/edit" + "/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axios.post("/auth/users/add_superuser" + "/?"+(new Date().getTime()), data);
  }

  delete(data) {
    return this.axios.post("/users/delete" + "/?"+(new Date().getTime()), data);
  }

  auth(data) {
    return this.axiosNoAUTH.post("/auth/token/login" + "/?"+(new Date().getTime()), data);
  }
}

export default new UsersAPI();
