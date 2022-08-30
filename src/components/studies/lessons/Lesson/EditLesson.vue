<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название">
          <a-input v-model="lesson.name" />
        </a-form-model-item>
        <a-form-model-item label="Описание">
          <a-textarea rows="4" v-model="lesson.description" />
        </a-form-model-item>
        <a-form-model-item label="Основная картинка">
          <input type="file"
                 id="file"
                 ref="file"
                 v-on:change="handleFileUpload()"/>
          <img :src="config.basicImageURL+lesson.image" alt="" width="100">
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
import LessonsAPI from "../../../../../api/LessonsAPI";
import config from "@/config";

export default {
  props: ["courseId", "moduleId", "lessonId"],
  data() {
    return {
      lesson: null,
      config: config
    };
  },

  mounted() {
    this.getLesson();
  },

  methods: {
    getLesson: function() {
      LessonsAPI.get(this.lessonId)
          .then(response => {
            this.lesson = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
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
