import BaseAPI from "./BaseAPI";

class CalendarAPI extends BaseAPI {
  get_all() {
    return this.axios.get("/course/student_calendar/");
  }

  get(id) {
    return this.axios.get("/calendar/" + id);
  }

  edit(data) {
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
