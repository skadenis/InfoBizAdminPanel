<template>
  <div>
    <div class="student-info">
      <span class="name">{{ student[this.studentId - 1].name }}</span>
      <span class="lastName">{{ student[this.studentId - 1].lastName }}</span>
    </div>
  </div>
</template>

<script>
import state from "../../../store/state";

export default {
  data() {
    return {
      student: null,
      studentId: null,
    };
  },

  mounted() {
    this.getStudent();
    this.studentId = window.location.pathname
      .split("students/")
      .pop()
      .replace(/[^0-9]/g, "");
  },

  methods: {
    getStudent: function() {
      this.student = state.students;
    },
  },
};
</script>

<style scoped lang="scss">
.student-info {
  margin-top: 20px;
  span {
    color: black;
    font-weight: 600;
    font-size: 1.2em;
  }

  .name {
    margin-right: 10px;
  }
}
</style>
