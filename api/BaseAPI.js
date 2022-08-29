import axios from "axios";
import Cookie from "js-cookie";

export default class BaseApi {
  constructor() {
    let Cookies = Cookie.get();

    this.axios = axios.create({
      baseURL: "//http://176.113.83.169",
      // headers: { Authorization: `Token ${Cookies.token}` },
      headers: {
        Authorization: `Token 31d61856cb6a7a513648a604a95841bc6f9c032a`,
      },
    });
  }

  refreshData() {
    window.location.reload();
  }
}
