<template>
  <div>
    <p class="students">Студенты курса:</p>
    <div class="table__head">
      <div>
        <p>Фамилия</p>
      </div>
      <div>
        <p>Имя</p>
      </div>
      <div>
        <p>Email</p>
      </div>
    </div>
    <StudentRow
      v-for="(student, index) in students"
      :data="student"
      :key="index"
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
.students {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.table__head {
  display: flex;
  background-color: rgb(221, 221, 221);

  div {
    width: calc(100% / 3);
    border-right: 1px solid #fff;

    &:last-child {
      border-right: none;
    }
  }

  p {
    padding: 10px;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
}
</style>
