<template>
  <div>
    <Lesson
      v-for="(lesson, lIndex) in lessons"
      v-bind:data="lesson"
      v-bind:moduleId="moduleId"
      v-bind:courseId="courseId"
      :key="lIndex"
    ></Lesson>
    <button class="add-btn" @click="add_lesson()">
      Добавить урок
    </button>
  </div>
</template>

<script>
import Lesson from "./Lesson/Lesson.vue";
import ModulesAPI from "../../../../api/ModulesAPI";

export default {
  props: ["courseId", "moduleId"],
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
      ModulesAPI.getModuleLesson(this.moduleId)
        .then((response) => {
          this.lessons = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    add_lesson: function() {
      this.goTo(
        "/courses/" +
          this.courseId +
          "/modules/" +
          this.moduleId +
          "/lessons/add"
      );
    },
  },
};
</script>

<style scoped lang="scss"></style>
