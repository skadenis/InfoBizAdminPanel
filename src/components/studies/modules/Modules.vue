<template>
  <div>
    <Module
      v-for="(module, mIndex) in modules"
      v-bind:data="module"
      v-bind:courseId="courseId"
      :key="mIndex"
    ></Module>
    <button class="add-btn" @click="add_module()">
      Добавить модуль
    </button>
  </div>
</template>

<script>
import Module from "./Module/Module.vue";
import CoursesAPI from "../../../../api/CoursesAPI";

export default {
  props: ["courseId"],
  components: {
    Module,
  },
  data() {
    return {
      modules: null,
    };
  },
  mounted() {
    this.getModules();
  },

  methods: {
    getModules: function() {
      CoursesAPI.get_course_modules(this.courseId)
        .then((response) => {
          this.modules = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    add_module: function() {
      this.goTo("/courses/" + this.courseId + "/modules/add");
    },
  },
};
</script>

<style scoped lang="scss"></style>
