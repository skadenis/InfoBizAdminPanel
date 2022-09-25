import BaseAPI from "./BaseAPI";

class LessonsAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/lesson/" + id + "/?"+(new Date().getTime()));
  }
  get_test_info(id) {
    return this.axios.get("/course/tests/" + id + "/?"+(new Date().getTime()));
  }
  addTest(data, lesson_id) {
    return this.axios.post("/test" + "/?"+(new Date().getTime()), {
      lesson: lesson_id,
      name: data.name,
      description: data.description
    });
  }
  editTest(data, lesson_id) {
    return this.axios.put("/test/"+ data.id + "?"+(new Date().getTime()), {
      lesson: lesson_id,
      name: data.name,
      description: data.description
    });
  }
  addQuestion(data, test_id) {
    return this.axios.post("/question" + "/?"+(new Date().getTime()), {
      test: test_id,
      name: data.name,
      index: data.description
    });
  }
  editQuestion(data, test_id) {
    return this.axios.put("/question/"+ data.id + "?"+(new Date().getTime()), {
      test: test_id,
      id: data.id,
      name: data.name,
      index: data.description
    });
  }
  addOption(data, question_id) {
    return this.axios.post("/option" + "/?"+(new Date().getTime()), {
      question: question_id,
      text: data.text,
      is_correct: data.is_correct
    });
  }
  editOption(data, question_id) {
    return this.axios.put("/option/"+ data.id + "?"+(new Date().getTime()), {
      question: question_id,
      id: data.id,
      text: data.text,
      is_correct: data.is_correct
    });
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
