<template>
  <div>
    <div class="course-info">
      <span class="name">{{ course[courseId].name }}</span>
    </div>
    <Modules v-bind:courseId="courseId" v-bind:data="course"></Modules>
  </div>
</template>

<script>
import state from "../../../../store/state";
import Modules from "../../modules/Modules.vue";

export default {
  components: {
    Modules,
  },
  data() {
    return {
      course: null,
      courseId: null,
    };
  },

  mounted() {
    this.getCourse();
    this.getCourseId();
  },

  methods: {
    getCourseId: function() {
      this.courseId =
        window.location.pathname
          .split("courses/")
          .pop()
          .replace(/[^0-9]/g, "") - 1;
    },
    getCourse: function() {
      this.course = state.courses;
    },
  },
};
</script>

<style scoped lang="scss">
.course-info {
  margin: 10px 0;
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
