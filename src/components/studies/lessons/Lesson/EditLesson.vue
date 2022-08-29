<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название">
          <a-input v-model="lesson[lessonId - 1].name" />
        </a-form-model-item>
        <a-form-model-item label="Описание">
          <a-textarea rows="4" v-model="lesson[lessonId - 1].description" />
        </a-form-model-item>
        <a-form-model-item label="Основная картинка">
          <input type="file" id="file" ref="file" />
          <p>Рекомендуемый размер картинки ширина: 656px, высота: 388px</p>
        </a-form-model-item>
        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="bottom-buttons">
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="primary">Сохранить</a-button>
            </a-col>
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="danger">Удалить</a-button>
            </a-col>
          </a-row>
        </a-form-model-item>
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
