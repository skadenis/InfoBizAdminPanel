import BaseAPI from "./BaseAPI";

class TestsAPI extends BaseAPI {
    get() {
        return this.axios.get("/course/results/?"+(new Date().getTime()));
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
}

export default new TestsAPI();
