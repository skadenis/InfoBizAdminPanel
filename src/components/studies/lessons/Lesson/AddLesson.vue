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
        <a-form-model-item label="Основная картинка" >
          <input type="file" id="file" ref="file"
                 v-on:change="handleImageUpload()"  />
          <p>Рекомендуемый размер картинки ширина: 656px, высота: 388px</p>
        </a-form-model-item>

        <a-form-model-item label="Видео">
          <input type="file" id="video" ref="video"
                 v-on:change="handleVideoUpload()" />
          <p>Рекомендуемый размер</p>
        </a-form-model-item>



        <a-form-model-item label="Тайминг">
          <div class="table__head">
            <div>
              <p>Время</p>
            </div>
            <div>
              <p>Описание</p>
            </div>
            <div>
              <p></p>
            </div>
          </div>
          <TimingRow
              v-for="(timing, index) in lesson.timer_set"
              :data="timing"
              :key="index"
          />
          <a-button class="button" type="primary" @click="addTiming">Добавить тайминг</a-button>
          <p>Рекомендуемый размер</p>
        </a-form-model-item>

        <a-form-model-item label="Дополнительные материалы">
          <input type="file" id="homework" ref="homework" multiple
                 v-on:change="handleFilesUpload()" />
          <p>Формат PDF</p>
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
import TimingRow from "./TimingRow"

export default {
  props: ['courseId', 'moduleId'],
  components:{
    TimingRow
  },
  data(){
    return{
      lesson: {
        name: null,
        description: null,
        question: null,
        timer_set: [1],
        lessonfiles_set: [1,2,3,4,5]
      },

      files:{
        image: null,
        video: null,
        files: null
      }
    }
  },
  methods: {
    handleImageUpload() {
      this.files.image = this.$refs.file.files[0];
    },
    handleVideoUpload() {
      this.files.video = this.$refs.video.files[0];
    },
    handleFilesUpload() {
      this.files.files = this.$refs.homework.files;
    },
    async add() {

      let formData = new FormData();

      formData.append("name", this.lesson.name);
      formData.append("course", this.courseId);
      formData.append("module", this.moduleId);
      formData.append("text", this.lesson.description);
      formData.append("question", this.lesson.question);

      if(this.files.image){
        formData.append("image", this.files.image);
      }

      if(this.files.video){
        formData.append("video", this.files.video);
      }

      if(this.files.files.length > 0){
        alert(this.files.files.length)
      }

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

    },
    addTiming(){
      this.lesson.timer_set.push(1);
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

.table__inputs {
  border: 1px solid rgb(221, 221, 221);

  input {
    height: 34px;
    width: 20%;
    border-right: 1px solid rgb(221, 221, 221);
    padding-left: 10px;
    &:last-child {
      border-right: none;
    }
    &:focus {
      outline: none;
    }
  }
}

.table__head {
  display: flex;
  background-color: rgb(221, 221, 221);

  div {
    width: calc(100%/3);
    border-right: 1px solid #fff;

    &:last-child {
      border-right: none;
    }
  }

  p {
    padding: 10px;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
}
</style>
