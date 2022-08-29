import BaseAPI from "./BaseAPI";

class SpecialOffersAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/marketing/offers" + id);
  }

  edit(data) {
    return this.axios.post("/marketing/offers/edit", data);
  }

  add(data) {
    return this.axios.post("/marketing/offers/add", data);
  }

  delete(data) {
    return this.axios.post("/marketing/offers/delete", data);
  }
}

export default new SpecialOffersAPI();
