import BaseAPI from "./BaseAPI";

class CalendarAPI extends BaseAPI {
  get_all() {
    return this.axios.get("/course/student_calendar/"+ "/?"+(new Date().getTime()));
  }

  get(id) {
    return this.axios.get("/calendar/" + id+ "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axios.post("/calendar/edit", data+ "/?"+(new Date().getTime()));
  }

  add(data) {
    return this.axios.post("/calendar/add", data+ "/?"+(new Date().getTime()));
  }

  delete(data) {
    return this.axios.post("/calendar/delete", data+ "/?"+(new Date().getTime()));
  }
}

export default new CalendarAPI();
