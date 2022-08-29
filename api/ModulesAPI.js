import BaseAPI from "./BaseAPI";

class ModulesAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/courses/modules/" + id);
  }

  edit(data) {
    return this.axios.post("/courses/modules/edit", data);
  }

  add(data) {
    return this.axios.post("/courses/modules/add", data);
  }

  delete(data) {
    return this.axios.post("/courses/modules/delete", data);
  }
}

export default new ModulesAPI();
