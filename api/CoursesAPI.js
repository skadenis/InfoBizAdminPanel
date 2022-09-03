import BaseAPI from "./BaseAPI";

class CoursesAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/course/"+id+ "/?"+(new Date().getTime()));
  }

  get_all() {
    return this.axios.get("/course/get_courses"+ "/?"+(new Date().getTime()));
  }

  get_course_modules(id){
    return this.axios.get("/course/get_modules/"+id+"/"+ "?"+(new Date().getTime()));
  }

  add(data) {
    return this.axiosMultyPart.post("/course/course"+ "/?"+(new Date().getTime()), data);
  }

  edit(data) {
    return this.axiosMultyPart.put("/course/course"+ "/?"+(new Date().getTime()), data);
  }

  delete(id) {
    return this.axios.delete("/course/course/"+id+ "/?"+(new Date().getTime()));
  }
}

export default new CoursesAPI();
