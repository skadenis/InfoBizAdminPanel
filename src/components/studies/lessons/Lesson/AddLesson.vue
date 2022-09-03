<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название">
          <a-input v-model="lesson.name" />
        </a-form-model-item>

        <a-form-model-item label="Краткое описание">
          <a-textarea rows="4" v-model="lesson.text" />
        </a-form-model-item>
        <a-form-model-item label="Текст">
          <a-textarea rows="4" v-model="lesson.text" />
        </a-form-model-item>
        <a-form-model-item label="Задание">
          <a-textarea rows="4" v-model="lesson.question" />
        </a-form-model-item>
        <a-form-model-item label="Основная картинка">
          <input
              type="file"
              id="file"
              ref="file"
              v-on:change="handleImageUpload()"
          />
          <p class="file-info">
            Рекомендуемый размер картинки ширина: 656px, высота: 388px
          </p>
        </a-form-model-item>

        <a-form-model-item label="Картинка для обложки урока">
          <input
              type="file"
              id="background_image"
              ref="background_image"
              v-on:change="handleBackgroundImageFileUpload()"
          />
          <p>Рекомендуемый размер картинки ширина: 656px, высота: 388px</p>
        </a-form-model-item>

        <a-form-model-item label="Видео">
          <input
              type="file"
              id="video"
              ref="video"
              v-on:change="handleVideoUpload()"
          />

          <p class="file-info">Рекомендуемый размер</p>
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
          <br />
          <a-button class="button" type="primary" @click="addTiming"
          >Добавить тайминг</a-button
          >
          <p class="file-info">Рекомендуемый размер</p>
        </a-form-model-item>

        <a-form-model-item label="Дополнительные материалы">
          <div class="table__head">
            <div>
              <p>Файл</p>
            </div>
            <div>
              <p>2</p>
            </div>
            <div>
              <p>3</p>
            </div>
          </div>
          <FileRow
              v-for="(timing, index) in lesson.lessonfiles_set"
              :data="timing"
              :index="index"
              :key="index"
          />
          <br>


          <input
              type="file"
              id="homework"
              ref="homework"
              multiple
              v-on:change="handleFilesUpload()"
          />
          <p class="file-info">Формат PDF</p>
        </a-form-model-item>

        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="bottom-buttons">
            <a-col :span="24" :lg="24" :md="24">
              <a-button class="button" type="primary" @click="add"
                >Добавить урок</a-button
              >
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
import FileRow from "./FileRow"

export default {
  props: ['courseId', 'moduleId'],
  components:{
    TimingRow,
    FileRow
  },
  data(){
    return{
      lesson: {
        name: "",
        description: "",
        question: "",
        timer_set: [],
        lessonfiles_set: []
      },

      files:{
        image: null,
        video: null,
        files: [],
        background_image: null
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
    handleBackgroundImageFileUpload(){
      this.files.background_image = this.$refs.background_image.files;
    },
    async add() {

      let formData = new FormData();

      formData.append("name", this.lesson.name);
      formData.append("course", this.courseId);
      formData.append("module", this.moduleId);
      formData.append("text", this.lesson.description);
      formData.append("question", this.lesson.question);

      if(this.files.image !== null){
        formData.append("image", this.files.image);
      }

      if (this.files.background_image !== null) {
        formData.append("background_image", this.files.background_image);
      }

      if(this.files.video !== null){
        formData.append("video", this.files.video);
      }

      // if(this.files.files.length > 0){
      //   this.files.files.forEach( (file) => {
      //     formData.append("lesson_file", file);
      //   });
      // }
      //
      // if(this.lesson.timer_set){
      //   this.lesson.timer_set.forEach( (timer) => {
      //     formData.append("timer", timer.time + ' '+timer.text);
      //   });
      // }

      let resultAxios = {};


      await LessonsAPI.add(formData)
          .then(response => {
            resultAxios = response
          })
          .catch((e) => {
            console.log(e);
          })


      if(resultAxios.status === 200){
        this.$root.$emit("createAlertGood");
        this.goTo('/courses/'+this.courseId+'/modules/'+this.moduleId+'/lessons/'+resultAxios.data.id);
      }

    },
    addTiming(){
      this.lesson.timer_set.push({
        time: "00:00:00",
        text: ""
      });
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
  height: 34px;

  div {
    width: calc(100%/3);
    border-right: 1px solid #fff;

    &:first-child {
      width: 20%;
    }

    &:nth-child(2) {
      width: 60%;
    }

    &:last-child {
      width: 20%;
      border-right: none;
    }
  }

  p {
    padding: 10px;
    line-height: 14px;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
}
.file-info {
  font-size: 0.8em;
}
</style>
