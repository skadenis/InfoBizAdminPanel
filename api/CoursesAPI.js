import BaseAPI from "./BaseAPI";

class CoursesAPI extends BaseAPI {
  // get(id) {
  //   return this.axios.get("courses/course/get_courses/" + id);
  // }

  get_all() {
    return this.axios.get("courses/course/get_courses/");
  }

  edit(data) {
    return this.axios.put("/courses/course/course/", data);
  }

  add(data) {
    return this.axios.post("courses/course/course/", data);
  }

  delete(data) {
    return this.axios.delete("/courses/course/course/", data);
  }
}

export default new CoursesAPI();
