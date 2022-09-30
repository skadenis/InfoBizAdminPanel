import axios from "axios";
import Cookie from "js-cookie";

export default class BaseApi {
  constructor() {
    let Cookies = Cookie.get();

    this.axios = axios.create({
      baseURL: "https://blogersbackend.gastrosoft.by",
      headers: { Authorization: `Token ${Cookies.token}`, 'Cache-Control': 'no-cache' },
      // headers: {
        // Authorization: `Token 227e0cf17204b43171c5ae54abcb54e7a3bdb330`,
      // },
    });

    this.axiosNoAUTH = axios.create({
      baseURL: "https://blogersbackend.gastrosoft.by",
      headers: {'Cache-Control': 'no-cache'},
      // headers: {
      // Authorization: `Token 227e0cf17204b43171c5ae54abcb54e7a3bdb330`,
      // },
    });

    this.axiosMultyPart = axios.create({
      baseURL: "https://blogersbackend.gastrosoft.by",
      headers: { Authorization: `Token ${Cookies.token}`, "Content-Type": "multipart/form-data" },
      // headers: {
      //   'Authorization': 'Token 227e0cf17204b43171c5ae54abcb54e7a3bdb330',
      //
      // },
    });
  }

  refreshData() {
    window.location.reload();
  }
}
