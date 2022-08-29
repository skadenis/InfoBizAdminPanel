<template>
  <div>
    <button class="add__lessons-btn">Добавить урок</button>
    <Lesson
      v-for="(lesson, lIndex) in lessons"
      v-bind:data="lesson"
      v-bind:moduleId="moduleId"
      v-bind:courseId="courseId"
      :key="lIndex"
    ></Lesson>
  </div>
</template>

<script>
import Lesson from "./Lesson/Lesson.vue";

export default {
  props: ["data", "courseId", "moduleId"],
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
      this.lessons = this.data[this.moduleId - 1].lessons;
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
