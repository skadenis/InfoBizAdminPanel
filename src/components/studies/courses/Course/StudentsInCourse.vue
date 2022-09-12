<template>
  <div>
    <p class="students-inc">Студенты курса:</p>
    <div class="table">
      <p>Имя</p>
      <p>Фамилия</p>
      <p>Email</p>
      <p>Удалить</p>
    </div>
    <StudentRow
      v-for="(student, index) in students"
      :data="student"
      :key="index"
      :course-id="courseId"
      :show-delete="true"
    />
  </div>
</template>

<script>
import Modules from "../../modules/Modules.vue";
import StudentsAPI from "../../../../../api/StudentsAPI";
import StudentRow from "../../../students/Student/Student";

export default {
  props: ["courseId"],
  components: {
    Modules,
    StudentRow,
  },
  data() {
    return {
      students: [],
    };
  },

  mounted() {
    this.getStudents();
    this.$root.$on("reloadData", this.getStudents);
  },

  methods: {
    getStudents() {
      StudentsAPI.getCourseStudents(this.courseId)
        .then((response) => {
          this.students = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.students-inc {
  color: #000;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
}
.table {
  display: flex;
  width: 100%;

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
    width: calc(100% / 3);
  }
}
</style>
