import BaseAPI from "./BaseAPI";

class SpecialOffersAPI extends BaseAPI {
  get_all() {
    return this.axios.get("/course/special_list" + "/?"+(new Date().getTime()));
  }

  get(id) {
    return this.axios.get("/course/special/" + id + "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axiosMultyPart.put("/course/special" + "/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axiosMultyPart.post("/course/special" + "/?"+(new Date().getTime()), data);
  }

  delete(id) {
    return this.axios.delete("/course/special/" + id + "/?"+(new Date().getTime()));
  }
}

export default new SpecialOffersAPI();
