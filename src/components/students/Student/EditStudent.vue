<template>
  <div>
    <div class="student-info">
      <span class="name">{{ student[studentId - 1].name }}</span>
      <span class="lastName">{{ student[studentId - 1].lastName }}</span>
    </div>
  </div>
</template>

<script>
import state from "../../../store/state";

export default {
  props: ["studentId"],
  data() {
    return {
      student: null,
    };
  },

  mounted() {
    this.getStudent();
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
