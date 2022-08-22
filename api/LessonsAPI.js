import BaseAPI from "./BaseAPI";

class LessonsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/courses/modules/lessons/" + id);
  }

  edit(data) {
    delete data.token;
    return this.axios.post("/courses/modules/lessons/edit", data);
  }

  add(data) {
    return this.axios.post("/courses/modules/lessons/add", data);
  }

  delete(data) {
    return this.axios.post("/courses/modules/lessons/delete", data);
  }
}

export default new LessonsAPI();
