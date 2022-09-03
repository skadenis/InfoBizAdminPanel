import BaseAPI from "./BaseAPI";

class ModulesAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/module/" + id + "/");
  }

  // get() {
  //   return this.axios.get("courses/course/get_modules/6/");
  // }

  getModuleLesson(id) {
    return this.axios.get("course/get_lessons/"+id+"/");
  }

  edit(data) {
    return this.axiosMultyPart.put("/course/module/", data);
  }

  add(data) {
    return this.axiosMultyPart.post("/course/module/", data);
  }

  delete(id) {
    return this.axios.delete("/course/module/" + id + "/");
  }

  changePerm(id, perm){

  }
}

export default new ModulesAPI();
