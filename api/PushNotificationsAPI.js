import BaseAPI from "./BaseAPI";

class PushNotificationsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/marketing/push/" + id);
  }

  edit(data) {
    delete data.token;
    return this.axios.post("/marketing/push/edit", data);
  }

  add(data) {
    return this.axios.post("/marketing/push/add", data);
  }

  delete(data) {
    return this.axios.post("/marketing/push/delete", data);
  }
}

export default new PushNotificationsAPI();
