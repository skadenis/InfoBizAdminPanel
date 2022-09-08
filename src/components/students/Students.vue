<template>
  <div>
    <div class="table">
      <p>Имя</p>
      <p>Фамилия</p>
      <p>Email</p>
    </div>
    <Student
      v-for="(student, sIndex) in students"
      v-bind:data="student"
      :key="sIndex"
      :show-delete="false"
    ></Student>
  </div>
</template>

<script>
import Student from "./Student/Student";
import StudentsAPI from "../../../api/StudentsAPI";

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
      StudentsAPI.get_all()
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
