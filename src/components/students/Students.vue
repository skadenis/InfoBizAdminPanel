<template>
  <div>
    <button class="add__students-btn">Добавить студента</button>
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
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
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
import state from "../../store/state";

import Student from "./Student/Student";

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

<style scoped lang="scss">
.table__head {
  display: flex;
  background-color: rgb(221, 221, 221);

  div {
    width: 20%;
    border-right: 1px solid #fff;

    &:last-child {
      border-right: none;
    }
  }

  p {
    padding: 10px;
    font-size: 1.2em;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
}

.add__students-btn {
  width: 20%;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
}

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
</style>
