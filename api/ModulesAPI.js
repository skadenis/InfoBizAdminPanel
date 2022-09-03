import BaseAPI from "./BaseAPI";

class ModulesAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/module/" + id + "/?"+(new Date().getTime()));
  }

  // get() {
  //   return this.axios.get("courses/course/get_modules/6/");
  // }

  getModuleLesson(id) {
    return this.axios.get("course/get_lessons/"+id+ "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axiosMultyPart.put("/course/module"+ "/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axiosMultyPart.post("/course/module"+ "/?"+(new Date().getTime()), data);
  }

  delete(id) {
    return this.axios.delete("/course/module/" + id + "/?"+(new Date().getTime()));
  }

  changePerm(id, perm){

  }
}

export default new ModulesAPI();
