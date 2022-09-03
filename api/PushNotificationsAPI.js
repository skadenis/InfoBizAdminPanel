import BaseAPI from "./BaseAPI";

class PushNotificationsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/marketing/push/" + id + "/?"+(new Date().getTime()));
  }

  edit(data) {
    return this.axios.post("/marketing/push/edit" + "/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axios.post("/marketing/push/add" + "/?"+(new Date().getTime()), data);
  }

  delete(data) {
    return this.axios.post("/marketing/push/delete" + "/?"+(new Date().getTime()), data);
  }
}

export default new PushNotificationsAPI();
