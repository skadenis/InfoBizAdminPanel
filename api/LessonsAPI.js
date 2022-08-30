import BaseAPI from "./BaseAPI";

class LessonsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/lesson/" + id + "/");
  }

  edit(data) {
    return this.axios.post("/courses/modules/lessons/edit", data);
  }

  add(data) {
    return this.axiosMultyPart.post("/course/lesson/", data);
  }

  delete(data) {
    return this.axios.post("/courses/modules/lessons/delete", data);
  }
}

export default new LessonsAPI();
