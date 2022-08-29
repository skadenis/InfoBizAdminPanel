<template>
  <div>
    123
    <div class="module-info">
      <span class="name">{{ module[Number(moduleId) - 1].name }}</span>
    </div>
    <!-- <Lessons
      v-bind:courseId="courseId"
      v-bind:moduleId="moduleId"
      v-bind:data="module"
    ></Lessons> -->
  </div>
</template>

<script>
import state from "../../../../store/state";
import Lessons from "../../lessons/Lessons.vue";

export default {
  components: {
    Lessons,
  },
  data() {
    return {
      module: null,
      moduleId: null,
      courseId: null,
    };
  },

  mounted() {
    this.getModule();
    this.getModuleId();
    this.getCourseId();
  },

  methods: {
    getCourseId: function() {
      this.courseId = window.location.pathname
        .split("courses/")
        .pop()
        .replace(/[^0-9]/g, "");
      console.log(this.courseId);
    },
    getModuleId: function() {
      this.moduleId = window.location.pathname
        .split("modules/")
        .pop()
        .replace(/[^0-9]/g, "");
      console.log(this.moduleId);
    },
    getModule: function() {
      this.module = state.courses[Number(this.courseId)].modules;
    },
  },
};
</script>

<style scoped lang="scss"></style>
