<template>
  <div>
    <Student
      v-for="(student, sIndex) in students"
      v-bind:data="student"
      :key="sIndex"
    ></Student>
  </div>
</template>

<script>
import state from "../../store/state";

import Student from "./Student/Student.vue";

export default {
  components: {
    Student,
  },
  data() {
    return {
      students: null,
    };
  },

  mounted() {
    this.getStudents();
  },

  methods: {
    getStudents: function() {
      this.students = state.students;
    },
  },
};
</script>

<style scoped lang="scss"></style>
