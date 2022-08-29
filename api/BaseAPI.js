import axios from "axios";
import Cookie from "js-cookie";

export default class BaseApi {
  constructor() {
    let Cookies = Cookie.get();

    this.axios = axios.create({
      baseURL: "//http://176.113.83.169",
      headers: { Authorization: `Token ${Cookies.token}` },
    });
  }

  refreshData() {
    window.location.reload();
  }
}
