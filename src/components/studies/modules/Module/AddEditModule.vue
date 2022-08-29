<template>
  <div>
    <div class="module-info">
      <span class="name">{{ module[moduleId - 1].name }}</span>
    </div>
    <Lessons
      v-bind:courseId="courseId"
      v-bind:moduleId="moduleId"
      v-bind:data="module"
    ></Lessons>
  </div>
</template>

<script>
import state from "../../../../store/state";
import Lessons from "../../lessons/Lessons.vue";

export default {
  props: ["courseId", "moduleId"],
  components: {
    Lessons,
  },
  data() {
    return {
      module: null,
    };
  },

  mounted() {
    this.getModule();
  },

  methods: {
    getModule: function() {
      this.module = state.courses[this.courseId - 1].modules;
    },
  },
};
</script>

<style scoped lang="scss"></style>
