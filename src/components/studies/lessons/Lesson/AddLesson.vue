<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название">
          <a-input v-model="lesson.name"/>
        </a-form-model-item>
        <a-form-model-item label="Тема урока">
          <a-input v-model="lesson.question"/>
        </a-form-model-item>
        <a-form-model-item label="Описание">
          <a-textarea rows="4" v-model="lesson.description"/>
        </a-form-model-item>
        <a-form-model-item label="Основная картинка">
          <input type="file" id="file" ref="file" />
          <p>Рекомендуемый размер картинки ширина: 656px, высота: 388px</p>
        </a-form-model-item>
        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="bottom-buttons">
            <a-col :span="24" :lg="24" :md="24">
              <a-button class="button" type="primary" @click="add">Добавить урок</a-button>
            </a-col>
          </a-row>
        </a-form-model-item>
      </a-col>
    </a-row>
  </div>
</template>

<script>

import LessonsAPI from "../../../../../api/LessonsAPI";

export default {
  props: ['courseId', 'moduleId'],
  data(){
    return{
      lesson: {
        name: null,
        description: null,
        question: null
      }
    }
  },
  methods: {
    async add() {

      let formData = new FormData();

      formData.append("name", this.lesson.name);
      formData.append("course", this.courseId);
      formData.append("module", this.moduleId);
      formData.append("text", this.lesson.description);
      formData.append("question", this.lesson.question);

      let resultAxios = {};


      await LessonsAPI.add(formData)
          .then(response => {
            resultAxios = response
          })
          .catch((e) => {
            console.log(e);
          })


      if(resultAxios.status === 200){
        this.goTo('/courses/'+this.courseId+'/modules/'+this.moduleId+'/lessons/'+resultAxios.data.id);
      }

    }
  }
}
</script>

<style scoped lang="scss">
.bottom-buttons {
  width: 100%;

  .button {
    width: 100%;
  }
}
</style>
