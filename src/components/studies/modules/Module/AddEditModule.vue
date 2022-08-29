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
      module: this.$router.params.id,
      moduleId: this.$router.params.ModuleId,
      courseId: this.$router.params.CourseId,
    };
  },

  mounted() {
    console.log(this.data);
  },

  methods: {},
};
</script>

<style scoped lang="scss"></style>
