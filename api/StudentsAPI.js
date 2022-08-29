import BaseAPI from "./BaseAPI";

class StudentsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/students/" + id);
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
}

export default new StudentsAPI();
