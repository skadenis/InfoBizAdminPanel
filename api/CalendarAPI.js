import BaseAPI from "./BaseAPI";

class CalendarAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/calendar/" + id);
  }

  edit(data) {
    delete data.token;
    return this.axios.post("/calendar/edit", data);
  }

  add(data) {
    return this.axios.post("/calendar/add", data);
  }

  delete(data) {
    return this.axios.post("/calendar/delete", data);
  }
}

export default new CalendarAPI();
