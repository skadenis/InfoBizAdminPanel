import BaseAPI from "./BaseAPI";

class HomeworkAPI extends BaseAPI {
  get(id) {
    return this.axios.get("/course/target_homework/" + id + "/?"+(new Date().getTime()));
  }

  get_all(filter) {
    return this.axios.get("/course/get_all_homework"+ "/?"+(new Date().getTime()) +"&"+ makeAdditionalParamsFilter(filter));
  }

  edit(data) {
    return this.axios.post("/homeworks/edit"+ "/?"+(new Date().getTime()), data);
  }

  add(data) {
    return this.axios.post("/homeworks/add"+ "/?"+(new Date().getTime()), data);
  }

  delete(data) {
    return this.axios.post("/homeworks/delete"+ "/?"+(new Date().getTime()), data);
  }
  check_homework(data) {
    return this.axios.put("/course/check_homework"+ "/?"+(new Date().getTime()), data);
  }
  get_all_filter_course(filter){

    return this.axios.get("/course/homework_by_course/"+filter.course+ "/?"+(new Date().getTime()) +"&"+ makeAdditionalParamsFilter(filter));
  }
  get_all_filter_course_module_lesson(filter){
    return this.axios.get("/course/homework_by_lesson/"+filter.lesson+ "/?"+(new Date().getTime()) +"&"+ makeAdditionalParamsFilter(filter));
  }
  get_all_filter_course_module(filter){
    return this.axios.get("course/homework_by_module/"+filter.module+ "/?"+(new Date().getTime()) +"&"+ makeAdditionalParamsFilter(filter));
  }
}

export default new HomeworkAPI();

function makeAdditionalParamsFilter(filter){
  let text = '';
  if(filter.status != null){
    text += 'status='+filter.status
  }
  if(filter.email != null){
    text !== '' ? text += '&' : '';
    text += 'email='+filter.email;
  }
  return text;
}