<template>
  <div>
    <div class="module-info">
      <span class="name">{{ lesson[lessonId - 1].name }}</span>
    </div>
  </div>
</template>

<script>
import state from "../../../../store/state";

export default {
  props: ["courseId", "moduleId", "lessonId"],
  data() {
    return {
      lesson: null,
    };
  },

  mounted() {
    this.getLesson();
  },

  methods: {
    getLesson: function() {
      this.lesson =
        state.courses[this.courseId - 1].modules[this.moduleId - 1].lessons;
    },
  },
};
</script>

<style scoped lang="scss"></style>
