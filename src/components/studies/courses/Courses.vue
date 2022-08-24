<template>
  <div>
    <Course
      v-for="(course, cIndex) in courses"
      v-bind:data="course"
      :key="cIndex"
    ></Course>
  </div>
</template>

<script>
import state from "../../../store/state";

import Course from "./Course/Course.vue";

export default {
  components: {
    Course,
  },
  data() {
    return {
      courses: null,
    };
  },
  mounted() {
    this.getCourses();
  },

  methods: {
    getCourses: function() {
      this.courses = state.courses;
    },
  },
};
</script>

<style scoped lang="scss"></style>
