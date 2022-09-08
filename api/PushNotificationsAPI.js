import BaseAPI from "./BaseAPI";

class PushNotificationsAPI extends BaseAPI {
  sendPush(data) {
    return this.axios.post("/course/send_push" + "/?"+(new Date().getTime()), data);
  }
}

export default new PushNotificationsAPI();
