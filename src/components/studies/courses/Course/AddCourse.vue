<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название">
          <a-input v-model="course.name"/>
        </a-form-model-item>
        <a-form-model-item label="Описание">
          <a-textarea rows="4" v-model="course.description" />
        </a-form-model-item>
        <a-form-model-item label="Основная картинка">
          <input type="file"
                 id="file"
                 ref="file"
                 v-on:change="handleFileUpload()" />
          <p>Рекомендуемый размер картинки ширина: 656px, высота: 388px</p>
        </a-form-model-item>
        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="bottom-buttons">
            <a-col :span="24" :lg="24" :md="24">
              <a-button class="button" type="primary" @click="add">Добавить курс</a-button>
            </a-col>

          </a-row>
        </a-form-model-item>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import CoursesAPI from "../../../../../api/CoursesAPI"
import axios from "axios";
import ModulesAPI from "../../../../../api/ModulesAPI";

export default {
  data() {
    return {
      course: {
        name: null,
        description: null,
        image: null
      },
      file: null
    }
  },
  methods: {
    async add() {

      let formData = new FormData();

      formData.append("name", this.course.name);
      formData.append("description", this.course.description);
      if(this.file){
        formData.append("image", this.file);
      }

      await CoursesAPI.add(formData)
          .then(response => {
            this.goTo('/courses/'+response.data.id);
          })
          .catch((e) => {
            console.log(e);
          })

    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
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
