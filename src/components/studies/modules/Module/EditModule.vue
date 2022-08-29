<template>
  <div>
    <div class="module-info">
      <p class="name">{{ module[moduleId - 1].name }}</p>
      <p class="description">{{ module[moduleId - 1].description }}</p>
    </div>
    <p>Вложенные модули:</p>
    <Lessons
      v-bind:courseId="courseId"
      v-bind:moduleId="moduleId"
      v-bind:data="module"
    ></Lessons>
    <a-row type="flex" :gutter="24" class="bottom-buttons">
      <a-col :span="24" :lg="12" :md="24">
        <a-button class="button" type="primary">Сохранить</a-button>
      </a-col>
      <a-col :span="24" :lg="12" :md="24">
        <a-button class="button" type="danger">Удалить</a-button>
      </a-col>
    </a-row>
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

<style scoped lang="scss">
.module-info {
  margin: 10px 0;

  .name {
    margin-bottom: 20px;
    color: black;
    font-weight: 600;
    font-size: 1.2em;
  }
}

.bottom-buttons {
  width: 100%;

  .button {
    width: 100%;
  }
}
</style>
