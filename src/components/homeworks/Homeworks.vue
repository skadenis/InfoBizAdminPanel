<template>
  <div>
    <div>
      <a-row type="flex" :gutter="24" class="bottom-buttons">
        <a-col :span="24" :lg="5" :md="5">
          <a-form-model-item label="Статус Д/З">
            <a-select style="width: 100%" v-model="filter.status">
              <a-select-option :value="null">Все</a-select-option>
              <a-select-option value="Complete">Принято</a-select-option>
              <a-select-option value="In_progress">На проверке</a-select-option>
              <a-select-option value="Failed">Отклонено</a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :span="24" :lg="4" :md="4">
          <a-form-model-item label="Email студента">
            <a-input v-model="filter.email"/>
          </a-form-model-item>
        </a-col>
        <a-col :span="24" :lg="5" :md="5">
          <a-form-model-item label="Курс">
            <a-select style="width: 100%" v-model="filter.course">
              <a-select-option v-for="(course, index) in courses" :value="course.id" :key="index">
                {{ course.name }}
              </a-select-option>
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :span="24" :lg="5" :md="5" v-if="filter.course !== null">
          <a-form-model-item label="Модуль" >
              <a-select style="width: 100%" v-model="filter.module">
                <a-select-option  v-for="(course_module, index2) in course_modules" :value="course_module.id" :key="index2">
                  {{course_module.name}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :span="24" :lg="5" :md="5" v-if="filter.module !== null">
          <a-form-model-item label="Урок" >
              <a-select style="width: 100%" v-model="filter.lesson">
                <a-select-option  v-for="(lesson, index) in lessons" :value="lesson.id" :key="index">{{lesson.name}}</a-select-option>
              </a-select>
          </a-form-model-item>
        </a-col>
      </a-row>

    </div>
    <div class="table">
      <p>Название</p>
      <p>Статус</p>
      <p>Курс</p>
      <p>Модуль</p>
      <p>Урок</p>
      <p>Студент</p>
      <p>Время</p>
    </div>
    <Homework
      v-for="(homework, hIndex) in homeworks"
      v-bind:data="homework"
      :hIndex="hIndex"
      :key="hIndex"
    ></Homework>
  </div>
</template>

<script>
import Homework from "./Homework/Homework.vue";
import HomeworkAPI from "../../../api/HomeworkAPI";
import CoursesAPI from "../../../api/CoursesAPI";
import ModulesAPI from "../../../api/ModulesAPI";



export default {
  components: {
    Homework,
  },
  watch: {
    async 'filter.course'(newValue) {
      await this.getModules(newValue);
      this.filter.course = newValue;
      this.filter.module = null;
      this.filter.lesson = null;

      this.updateHomeWork();
    },
    async 'filter.module'(newValue) {
      this.getLessons(newValue);
      this.filter.module = newValue;
      this.filter.lesson = null;
      this.updateHomeWork();
    },
    'filter.lesson'(newValue) {
      this.filter.lesson = newValue;
      this.updateHomeWork();
    },
    'filter.email'(newValue) {
      this.filter.email = newValue;
      this.updateHomeWork();
    },
    'filter.status'(newValue) {
      this.filter.status = newValue;
      this.updateHomeWork();
    },
  },
  data() {
    return {
      homeworks: null,
      courses: [],
      course_modules: [],
      lessons: [],
      filter: {
        status: null,
        course: null,
        module: null,
        lesson: null
      }
    };
  },

  async created() {
    await this.getCourses();
    await this.getHomeworks();
  },

  methods: {
    updateHomeworkCourse(){
      HomeworkAPI.get_all_filter_course(this.filter)
          .then((response) => {
            this.homeworks = response.data.homeworks;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    updateHomeworkLessonMoudleCourse(){
      HomeworkAPI.get_all_filter_course_module_lesson(this.filter)
          .then((response) => {
            this.homeworks = response.data.homeworks;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    updateHomeworkModuleCourse(){
      HomeworkAPI.get_all_filter_course_module(this.filter)
          .then((response) => {
            this.homeworks = response.data.homeworks;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    updateHomeWork(){
      if(this.filter.course != null){
        if (this.filter.module != null){
          if (this.filter.lesson != null){
            this.updateHomeworkLessonMoudleCourse();
          }else {
            this.updateHomeworkModuleCourse();
          }
        }else {
          this.updateHomeworkCourse();
        }
      }else {
        this.getHomeworks();
      }
    },
    getLessons(id) {
      ModulesAPI.getModuleLesson(id)
          .then((response) => {
            console.log(response);
            this.lessons = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    async getModules(id) {
      await CoursesAPI.get_course_modules(id)
          .then((response) => {
            this.course_modules = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getCourses: function() {
      CoursesAPI.get_all()
          .then((response) => {
            this.courses = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getHomeworks: function() {
      HomeworkAPI.get_all(this.filter)
        .then((response) => {
          this.homeworks = response.data.homeworks;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  display: flex;
  width: 100%;
  margin-top: 20px;

  p {
    box-sizing: border-box;

    font-weight: 600;
    color: #000;

    border-right: 1px solid #eee;
    white-space: nowrap;

    text-align: center;

    background: #ddd;
    padding: 10px 0;
    line-height: 14px;
    width: calc(100% / 6);
  }
}
</style>
