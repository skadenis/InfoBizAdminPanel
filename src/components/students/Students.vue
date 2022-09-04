<template>
  <div>
    <div class="table__head">
      <div>
        <p>Имя</p>
      </div>
      <div>
        <p>Фамилия</p>
      </div>
      <div>
        <p>Курс</p>
      </div>
    </div>
    <Student
      v-for="(student, sIndex) in students"
      v-bind:data="student"
      :key="sIndex"
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

.add__students-btn {
  width: 20%;
  min-width: 105px;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8em;
}
</style>
