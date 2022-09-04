import BaseAPI from "./BaseAPI";

class CalendarAPI extends BaseAPI {
  get_all() {
    return this.axios.get("/course/calendar/all"+ "/?"+(new Date().getTime()));
  }

  get(id) {
    return this.axios.get("/course/calendar/" + id+ "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axios.put("/course/calendar/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axios.post("/course/calendar/?"+(new Date().getTime()), data);
  }

  delete(id) {
    console.log(123);
    return this.axios.delete("/course/calendar/"+id+"/");
  }
}

export default new CalendarAPI();
