import axios from "axios";
import Cookie from "js-cookie";

export default class BaseApi {
  constructor() {
    let Cookies = Cookie.get();

    this.axios = axios.create({
      baseURL: "//176.113.83.169",
      // headers: { Authorization: `Token ${Cookies.token}` },
      headers: {
        Authorization: `Token 227e0cf17204b43171c5ae54abcb54e7a3bdb330`,
      },
    });

    this.axiosMultyPart = axios.create({
      baseURL: "//176.113.83.169",
      headers: {
        'Authorization': 'Token 227e0cf17204b43171c5ae54abcb54e7a3bdb330',
        "Content-Type": "multipart/form-data"
      },
    });
  }

  refreshData() {
    window.location.reload();
  }
}
