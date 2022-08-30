import BaseAPI from "./BaseAPI";

class StudentsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/student/" + id + "/");
  }

  get_all(){
    return this.axios.get("/course/all_students/");
  }

  edit(data) {
    return this.axios.post("/students/edit", data);
  }

  add(data) {
    return this.axios.post("/students/add", data);
  }

  delete(data) {
    return this.axios.post("/students/delete", data);
  }

  getCourseStudents(courseID){
    return this.axios.get("/course/course_students/"+courseID+"/");
  }

  addToCourse(stID, cId){
    return this.axios.post("/course/sub_course/", {
      course_id: cId,
      user_id: stID
    });
  }
}

export default new StudentsAPI();
