import BaseAPI from "./BaseAPI";

class HomeworkAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/target_homework/" + id + "/?"+(new Date().getTime()));
  }

  get_all() {
    return this.axios.get("/course/get_all_homework"+ "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axios.post("/homeworks/edit"+ "/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axios.post("/homeworks/add"+ "/?"+(new Date().getTime()), data);
  }

  delete(data) {
    return this.axios.post("/homeworks/delete"+ "/?"+(new Date().getTime()), data);
  }
  check_homework(data) {
    return this.axios.put("/course/check_homework"+ "/?"+(new Date().getTime()), data);
  }
  get_all_filter_course(){
    return this.axios.get("/course/get_all_homework"+ "/?"+(new Date().getTime()));
  }
  get_all_filter_course_module_lesson(lessonID){
    return this.axios.get("/course/homework_by_lesson/"+lessonID+ "/?"+(new Date().getTime()));
  }
  get_all_filter_course_module(moduleID){
    return this.axios.get("course/homework_by_module/"+moduleID+ "/?"+(new Date().getTime()));
  }
}

export default new HomeworkAPI();
