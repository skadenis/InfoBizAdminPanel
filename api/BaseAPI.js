import axios from "axios";
import Cookie from "js-cookie";

export default class BaseApi {
  constructor() {
    let Cookies = Cookie.get();

    this.axios = axios.create({
      baseURL: "//localhost:3000",
      headers: { Authorization: `Bearer ${Cookies.token}` },
    });
  }

  refreshData() {
    window.location.reload();
  }
}
