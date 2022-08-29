<template>
  <div>
    <button class="add__courses-btn">Добавить курс</button>
    <!-- <div class="table__head">
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
    </div> -->
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
// .table__head {
//   display: flex;
//   background-color: rgb(221, 221, 221);

//   div {
//     width: 20%;
//     border-right: 1px solid #fff;

//     &:last-child {
//       border-right: none;
//     }
//   }

//   p {
//     padding: 10px;
//     font-weight: 600;
//     color: #000;
//     text-align: center;
//   }
// }

.add__courses-btn {
  width: 20%;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8em;
}
</style>
