<template>
  <div>
    <Course
      v-for="(course, cIndex) in courses"
      v-bind:data="course"
      :key="cIndex"
    ></Course>
    <button class="add-btn" @click="add_course()">
      Добавить курс
    </button>
  </div>
</template>

<script>
import Course from "./Course/Course.vue";
import CoursesAPI from "../../../../api/CoursesAPI";

export default {
  components: {
    Course,
  },
  data() {
    return {
      courses: null,
    };
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
  },
};
</script>

<style scoped lang="scss"></style>
