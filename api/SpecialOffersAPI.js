import BaseAPI from "./BaseAPI";

class SpecialOffersAPI extends BaseAPI {
  get_all() {
    return this.axios.get("/course/special_list/");
  }

  get(id) {
    return this.axios.get("/course/special/" + id + "/");
  }

  edit(data) {
    return this.axiosMultyPart.put("/course/special/", data);
  }

  add(data) {
    return this.axiosMultyPart.post("/course/special/", data);
  }

  delete(id) {
    return this.axios.delete("/course/special/" + id + "/");
  }
}

export default new SpecialOffersAPI();
