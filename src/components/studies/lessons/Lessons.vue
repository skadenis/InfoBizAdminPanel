<template>
  <div>
    <Lesson
      v-for="(lesson, lIndex) in lessons"
      v-bind:data="lesson"
      v-bind:moduleId="moduleId"
      v-bind:courseId="courseId"
      :key="lIndex"
    ></Lesson>
    <button class="add__lessons-btn" @click="add_lesson()">
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
          .then(response => {
            this.lessons = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
    },
    goTo: function(data) {
      this.$router.push(data);
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
