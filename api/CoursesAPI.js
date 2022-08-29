import BaseAPI from "./BaseAPI";

class CoursesAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/courses/" + id);
  }

  edit(data) {
    return this.axios.post("/courses/edit", data);
  }

  add(data) {
    return this.axios.post("/courses/add", data);
  }

  delete(data) {
    return this.axios.post("/courses/delete", data);
  }
}

export default new CoursesAPI();
