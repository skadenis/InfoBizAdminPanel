<template>
  <div>
    <draggable v-model="modules" draggable=".module" style="width: 100%">
      <Module
        v-for="(module, mIndex) in modules"
        v-bind:data="module"
        v-bind:courseId="courseId"
        :key="mIndex"
      ></Module>
    </draggable>
    <button class="add-btn" @click="add_module()">
      Добавить модуль
    </button>
  </div>
</template>

<script>
import Module from "./Module/Module.vue";
import CoursesAPI from "../../../../api/CoursesAPI";
import draggable from "vuedraggable";
import ModulesAPI from "../../../../api/ModulesAPI";

export default {
  props: ["courseId"],
  components: {
    Module,
    draggable,
  },
  data() {
    return {
      modules: null,
    };
  },
  mounted() {
    this.getModules();
  },
  watch: {
    modules: {
      handler(newMenu, oldMenu) {
        this.modules = newMenu;
        (this.modules).forEach(function (module, catKey) {
          this.editModule(module.id, catKey);
        }.bind(this));
      }
    },
    deep: true
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
    editModule(id, index) {

      let formData = new FormData();
      formData.append("course", this.courseId);
      formData.append("module", id);
      formData.append("index", index);

      ModulesAPI.edit(formData).catch((e) => {
        console.log(e);
      });
    },

  },
};
</script>

<style scoped lang="scss"></style>
