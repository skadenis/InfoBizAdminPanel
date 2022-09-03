import BaseAPI from "./BaseAPI";

class CoursesAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/course/"+id+ "/?"+(new Date().getTime()));
  }

  get_all() {
    return this.axios.get("/course/get_courses/");
  }

  get_course_modules(id){
    return this.axios.get("/course/get_modules/"+id+"/");
  }

  add(data) {
    return this.axiosMultyPart.post("/course/course/", data);
  }

  edit(data) {
    return this.axiosMultyPart.put("/course/course/", data);
  }

  delete(id) {
    return this.axios.delete("/course/course/"+id+"/");
  }
}

export default new CoursesAPI();
