<template>
  <div>
    <h2>Студенты курса</h2>
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
        <div>
          <p></p>
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
    StudentRow
  },
  data() {
    return {
      students: []
    };
  },

  mounted() {
    this.getStudents();
  },

  methods: {
    getStudents(){
      StudentsAPI.getCourseStudents(this.courseId)
          .then(response => {
            this.students = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
      }
    }
};
</script>

<style scoped lang="scss">
.table__inputs {
  border: 1px solid rgb(221, 221, 221);

  input {
    height: 34px;
    width: 20%;
    border-right: 1px solid rgb(221, 221, 221);
    padding-left: 10px;
    &:last-child {
      border-right: none;
    }
    &:focus {
      outline: none;
    }
  }
}

.table__head {
  display: flex;
  background-color: rgb(221, 221, 221);

  div {
    width: calc(100%/3);
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