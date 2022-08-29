import BaseAPI from "./BaseAPI";

class ModulesAPI extends BaseAPI {
  // get(id) {
  //   return this.axios.get("/courses/modules/" + id);
  // }

  get() {
    return this.axios.get("courses/course/get_modules6/");
  }

  edit(data) {
    return this.axios.put("courses/course/module/", data);
  }

  add(data) {
    return this.axios.post("courses/course/module/", data);
  }

  delete(data) {
    return this.axios.delete("courses/course/module/", data);
  }
}

export default new ModulesAPI();
