<script src="../../../api/TestsAPI.js"></script>
<template>
  <div>
    <div>
      <a-row type="flex" :gutter="24" class="bottom-buttons">
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
      <p>#</p>
      <p>Курс</p>
      <p>Модуль</p>
      <p>Урок</p>
      <p>Студент</p>
      <p>Результат</p>
    </div>
    <TestsRow v-for="(test, testIndex) in tests" :key="testIndex" :test="test" :index="testIndex"/>
  </div>
</template>

<script>
import TestsAPI from "../../../api/TestsAPI";
import CoursesAPI from "../../../api/CoursesAPI";
import ModulesAPI from "../../../api/ModulesAPI";
import TestsRow from "./TestsRow";



export default {
  components: {
    TestsRow
  },
  watch: {
    async 'filter.course'(newValue) {
      await this.getModules(newValue);
      this.filter.course = newValue;
      this.filter.module = null;
      this.filter.lesson = null;

      this.updateTests();
    },
    async 'filter.module'(newValue) {
      this.getLessons(newValue);
      this.filter.module = newValue;
      this.filter.lesson = null;
      this.updateTests();
    },
    'filter.lesson'(newValue) {
      this.filter.lesson = newValue;
      this.updateTests();
    },
    'filter.email'(newValue) {
      this.filter.email = newValue;
      this.updateTests();
    }
  },
  data() {
    return {
      tests: [],
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
    await this.getTests();
  },

  methods: {
    updateTestsCourse(){
      TestsAPI.get_all_filter_course(this.filter)
          .then((response) => {
            this.tests = response.data.tests;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    updateTestsLessonMoudleCourse(){
      TestsAPI.get_all_filter_course_module_lesson(this.filter)
          .then((response) => {
            this.tests = response.data.tests;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    updateTestsModuleCourse(){
      TestsAPI.get_all_filter_course_module(this.filter)
          .then((response) => {
            this.tests = response.data.tests;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    updateTests(){
      if(this.filter.course != null){
        if (this.filter.module != null){
          if (this.filter.lesson != null){
            this.updateTestsLessonMoudleCourse();
          }else {
            this.updateTestsModuleCourse();
          }
        }else {
          this.updateTestsCourse();
        }
      }else {
        this.getTests();
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
    getTests: function() {
      TestsAPI.get()
          .then((response) => {
            this.tests = response.data.results;
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
