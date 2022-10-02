import BaseAPI from "./BaseAPI";

class TestsAPI extends BaseAPI {
    get() {
        return this.axios.get("/course/results/?"+(new Date().getTime()));
    }
    getById(id) {
        return this.axios.get("/test_result/?result="+id+"&"+(new Date().getTime()));
    }
    get_all_filter_course(){
        return this.axios.get("/course/results/?"+(new Date().getTime()));
    }
    get_all_filter_course_module_lesson(){
        return this.axios.get("/course/results/?"+(new Date().getTime()));
    }
    get_all_filter_course_module(){
        return this.axios.get("/course/results/?"+(new Date().getTime()));
    }
    deleteResult(data){
        return this.axios.delete("/test_result/?"+(new Date().getTime()), data);
    }
}

export default new TestsAPI();
