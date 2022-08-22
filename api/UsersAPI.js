import BaseAPI from "./BaseAPI";

class UsersAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/users/" + id);
  }

  edit(data) {
    delete data.token;
    return this.axios.post("/users/edit", data);
  }

  add(data) {
    return this.axios.post("/users/add", data);
  }

  delete(data) {
    return this.axios.post("/users/delete", data);
  }
}

export default new UsersAPI();
