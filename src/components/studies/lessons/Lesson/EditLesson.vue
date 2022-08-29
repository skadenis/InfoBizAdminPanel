<template>
  <div>
    <div class="lesson-info">
      <p class="name">{{ lesson[lessonId - 1].name }}</p>
      <p class="description">{{ lesson[lessonId - 1].description }}</p>
    </div>
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

<style scoped lang="scss">
.lesson-info {
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
