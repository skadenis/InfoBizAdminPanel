import BaseAPI from "./BaseAPI";

class LessonsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/lesson/" + id + "/?"+(new Date().getTime()));
  }
  edit(data) {
    return this.axiosMultyPart.put("/course/lesson"+ "/?"+(new Date().getTime()), data);
  }
  add(data) {
    return this.axiosMultyPart.post("/course/lesson"+ "/?"+(new Date().getTime()), data);
  }
  delete(id) {
    return this.axios.delete("/course/lesson/"+id + "/?"+(new Date().getTime()));
  }
  deleteFile(id){
    return this.axios.delete("/course/file_del/"+id + "/?"+(new Date().getTime()));
  }
  deleteTiming(id){
    return this.axios.delete("/course/timer_del/"+id + "/?"+(new Date().getTime()));
  }
}

export default new LessonsAPI();
