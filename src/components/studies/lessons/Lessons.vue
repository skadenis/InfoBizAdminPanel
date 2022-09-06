<template>
  <div>
    <draggable v-model="lessons" draggable=".lesson" style="width: 100%">
      <Lesson
        v-for="(lesson, lIndex) in lessons"
        v-bind:data="lesson"
        v-bind:moduleId="moduleId"
        v-bind:courseId="courseId"
        :key="lIndex"
      ></Lesson>
    </draggable>
    <button class="add-btn" @click="add_lesson()">
      Добавить урок
    </button>
  </div>
</template>

<script>
import Lesson from "./Lesson/Lesson.vue";
import ModulesAPI from "../../../../api/ModulesAPI";
import LessonsAPI from "../../../../api/LessonsAPI";
import draggable from "vuedraggable";


export default {
  props: ["courseId", "moduleId"],
  components: {
    Lesson,
    draggable
  },
  watch: {
    lessons: {
      handler(newMenu, oldMenu) {
        this.lessons = newMenu;
        (this.lessons).forEach(function (lesson, catKey) {
          this.editLessonPos(lesson.id, catKey);
        }.bind(this));
      }
    },
    deep: true
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
    editLessonPos(id, index) {

      let formData = new FormData();
      formData.append("course", this.courseId);
      formData.append("module", this.moduleId);
      formData.append("lesson", id);
      formData.append("index", index);

      LessonsAPI.edit(formData).catch((e) => {
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
