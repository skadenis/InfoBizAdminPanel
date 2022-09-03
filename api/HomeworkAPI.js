import BaseAPI from "./BaseAPI";

class HomeworkAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/target_homework/" + id + "/");
  }

  get_all() {
    return this.axios.get("/course/get_all_homework/");
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
  check_homework(data) {
    return this.axios.put("/course/check_homework/", data);
  }
}

export default new HomeworkAPI();
