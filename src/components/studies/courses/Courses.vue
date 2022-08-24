<template>
  <div>
    <div class="table__head">
      <div>
        <p>Название курса</p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
    <div class="table__inputs">
      <input type="text" placeholder="Введите название" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </div>
    <button class="add__courses-btn">Добавить курс</button>
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
.add__courses-btn {
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
