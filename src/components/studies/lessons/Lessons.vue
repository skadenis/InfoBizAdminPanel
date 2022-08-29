<template>
  <div>
    <button class="add__lessons-btn">Добавить урок</button>
    <Lesson
      v-for="(lesson, lIndex) in lessons"
      v-bind:data="lesson"
      :key="lIndex"
    ></Lesson>
  </div>
</template>

<script>
import Lesson from "./Lesson/Lesson.vue";

export default {
  props: ["data", "courseId"],
  components: {
    Lesson,
  },
  data() {
    return {
      lessons: null,
    };
  },
  mounted() {
    this.getLessons();
  },

  methods: {
    getLessons: function() {
      this.modules = this.data[this.courseId].modules[this.moduleId];
    },
  },
};
</script>

<style scoped lang="scss">
.add__lessons-btn {
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
