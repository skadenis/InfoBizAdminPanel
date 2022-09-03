import BaseAPI from "./BaseAPI";

class LessonsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/lesson/" + id + "/");
  }

  edit(data) {
    return this.axiosMultyPart.put("/course/lesson/", data);
  }

  add(data) {
    return this.axiosMultyPart.post("/course/lesson/", data);
  }

  delete(id) {
    return this.axios.delete("/course/lesson/"+id+"/");
  }

  deleteFile(id){
    return this.axios.delete("/course/file_del/"+id+"/");
  }
  deleteTiming(id){
    return this.axios.delete("/course/timer_del/"+id+"/");
  }
}

export default new LessonsAPI();
