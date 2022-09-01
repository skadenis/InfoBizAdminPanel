import BaseAPI from "./BaseAPI";

class HomeworkAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/homeworks/" + id + "/");
  }

  get_all() {
    return this.axios.get("/homeworks/");
  }

  edit(data) {
    return this.axios.post("/homeworks/edit", data);
  }

  add(data) {
    return this.axios.post("/homeworks/add", data);
  }

  delete(data) {
    return this.axios.post("/homeworks/delete", data);
  }
}

export default new HomeworkAPI();
