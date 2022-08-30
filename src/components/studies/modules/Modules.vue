<template>
  <div>
    <Module
      v-for="(module, mIndex) in modules"
      v-bind:data="module"
      v-bind:courseId="courseId"
      :key="mIndex"
    ></Module>
    <button class="add__modules-btn" @click="add_module()">
      Добавить модуль
    </button>
  </div>
</template>

<script>
import Module from "./Module/Module.vue";
import CoursesAPI from "../../../../api/CoursesAPI";

export default {
  props: [ "courseId"],
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
          .then(response => {
            this.modules = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
    },
    goTo: function(data) {
      this.$router.push(data);
    },
    add_module: function() {
      this.goTo("/courses/" + this.courseId + "/modules/add");
    },
  },
};
</script>

<style scoped lang="scss">
.add__modules-btn {
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
