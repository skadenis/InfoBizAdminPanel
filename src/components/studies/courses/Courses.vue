<template>
  <div>
    <draggable v-model="courses" draggable=".course" style="width: 100%">
      <Course
        v-for="(course, cIndex) in courses"
        v-bind:data="course"
        :key="cIndex"
      ></Course>
    </draggable>
    <button class="add-btn" @click="add_course()">
      Добавить курс
    </button>
  </div>
</template>

<script>
import Course from "./Course/Course.vue";
import CoursesAPI from "../../../../api/CoursesAPI";
import draggable from "vuedraggable";
import LessonsAPI from "../../../../api/LessonsAPI";

export default {
  components: {
    Course,
    draggable
  },
  data() {
    return {
      courses: null,
    };
  },
  watch: {
    courses: {
      handler(newMenu, oldMenu) {
        this.courses = newMenu;
        (this.courses).forEach(function (course, catKey) {
          this.editCoursePos(course.id, catKey);
        }.bind(this));
      }
    },
    deep: true
  },
  created: function() {
    this.getCourses();
  },

  methods: {
    getCourses: function() {
      CoursesAPI.get_all()
        .then((response) => {
          this.courses = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    add_course: function() {
      this.goTo("/courses/add");
    },
    editCoursePos(id, index) {

      let formData = new FormData();
      formData.append("course_id", id);
      formData.append("index", index);

      CoursesAPI.edit(formData).catch((e) => {
        console.log(e);
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
