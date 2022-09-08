import BaseAPI from "./BaseAPI";

class StudentsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/student/" + id + "/?"+(new Date().getTime()));
  }

  get_all(){
    return this.axios.get("/course/all_students" + "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axios.post("/students/edit" + "/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axios.post("/students/add" + "/?"+(new Date().getTime()), data);
  }

  delete(data) {
    return this.axios.post("/students/delete" + "/?"+(new Date().getTime()), data);
  }

  getCourseStudents(courseID){
    return this.axios.get("/course/course_students/"+courseID + "/?"+(new Date().getTime()));
  }

  addToCourse(stID, cId){
    return this.axios.post("/course/sub_course" + "/?"+(new Date().getTime()), {
      course_id: cId,
      user_id: stID
    });
  }

  unsubscribe_course(data){
    return this.axios.delete("/course/unsubscribe_course" + "/?"+(new Date().getTime()), { data: data });
  }

  unsubscribe_group(data){
    return this.axios.delete("/chat/user" + "/?"+(new Date().getTime()), { data: data });
  }
}

export default new StudentsAPI();
