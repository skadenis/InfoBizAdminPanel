<template>
  <div>
    <a-row>
      <a-col>
        Статус загрузки {{ uploadPercentage }} из 1000
        <a-form-model-item label="Название">
          <a-input v-model="lesson.name" />
        </a-form-model-item>

        <a-form-model-item label="Краткое описание">
          <a-textarea rows="4" v-model="lesson.short_desc" />
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
          <img
            :src="config.basicImageURL + this.lesson.image"
            alt=""
            width="100"
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
          <img
              :src="config.basicImageURL + this.lesson.background_image"
              alt=""
              width="100"
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
          <br />

          <video
            autoplay="autoplay"
            controls="controls"
            :src="config.basicVideoURL + this.lesson.video"
            width="400"
            height="300"
          ></video>

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
          <br />

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
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="primary" @click="edit"
                >Сохранить</a-button
              >
            </a-col>
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="danger" @click="deleteLesson"
                >Удалить</a-button
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
import config from "@/config";
import TimingRow from "@/components/studies/lessons/Lesson/TimingRow";
import FileRow from "@/components/studies/lessons/Lesson/FileRow";
import axios from "axios";
import Cookie from "js-cookie";

export default {
  props: ["courseId", "moduleId", "lessonId"],
  components: {
    TimingRow,
    FileRow,
  },
  data() {
    return {
      lesson: {
        name: null,
        text: null,
        question: null,
        timer_set: [],
        lessonfiles_set: [],
        short_desc: ""
      },

      files: {
        image: null,
        video: null,
        files: [],
        background_image: null
      },
      config: config,
      uploadPercentage: 0,
    };
  },
  created() {
    this.$root.$on('renewData', this.getLesson);
  },
  mounted() {
    this.getLesson();
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
    handleBackgroundImageFileUpload() {
      this.files.background_image = this.$refs.background_image.files[0];
    },
    addTiming() {
      this.lesson.timer_set.push({
        id: null,
        time: "00:00:00",
        text: "",
      });
    },
    getLesson: function () {
      LessonsAPI.get(this.lessonId)
          .then((response) => {
            this.lesson = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    async edit() {
      this.uploadPercentage = 0;
      await this.addFiles();
      await this.editTiming();

      let formData = new FormData();

      formData.append("lesson", this.lessonId);
      formData.append("name", this.lesson.name);
      formData.append("course", this.courseId);
      formData.append("module", this.moduleId);
      formData.append("text", this.lesson.text);
      formData.append("question", this.lesson.question);
      formData.append("short_desc", this.lesson.short_desc);


      if (this.files.image !== null) {
        formData.append("image", this.files.image);
      }

      if (this.files.background_image !== null) {
        formData.append("background_image", this.files.background_image);
      }

      if (this.files.video !== null) {
        formData.append("video", this.files.video);
      }



      let resultAxios = false;
      let Cookies = Cookie.get();

      await axios
          .put("https://blogersbackend.gastrosoft.by/course/lesson/", formData, {
            headers: {
              Authorization: `Token ${Cookies.token}`,
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: function (progressEvent) {
              this.uploadPercentage = parseInt(
                  Math.round((progressEvent.loaded / progressEvent.total) * 500)
              );
            }.bind(this),
          })
          .then(function () {
            resultAxios = true;
            console.log("SUCCESS!!");
          })
          .catch(function (e) {
            console.log(e)
            console.log("FAILURE!!");
          });

      if (resultAxios === true) {
        this.$root.$emit("createAlertGood");
      }

      // await LessonsAPI.edit(formData)
      //     .then(response => {
      //       resultAxios = response
      //     })
      //     .catch((e) => {
      //       console.log(e);
      //     })
    },
    deleteLesson() {
      LessonsAPI.delete(this.lessonId)
          .then(response => {
            this.$root.$emit("createAlertGood");
            this.goTo('/courses/' + this.courseId + '/modules/' + this.moduleId);
          })
          .catch((e) => {
            console.log(e);
          })
    },
    async addFiles() {

      if (this.files.files.length > 0) {
        let formData = new FormData();

        this.files.files.forEach((file) => {
          formData.append("lesson_file", file);
        });
        let Cookies = Cookie.get();

        await axios
            .post("https://blogersbackend.gastrosoft.by/course/file/" + this.lessonId + "/", formData, {
              headers: {
                Authorization: `Token ${Cookies.token}`,
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: function (progressEvent) {
                this.uploadPercentage = parseInt(
                    Math.round((progressEvent.loaded / progressEvent.total) * 500)
                );
              }.bind(this),
            })
            .then(function () {
              this.$root.$emit("createAlertGood");
              console.log("SUCCESS!!");
            })
            .catch(function () {
              console.log("FAILURE!!");
            });
      } else {
        this.uploadPercentage = 500;
      }
    },
    async editTiming() {
      if (this.lesson.timer_set.length > 0) {
        let formData = new FormData();

        this.lesson.timer_set.forEach((timer) => {
          console.log(timer.id);
          if(timer.id === null){
            formData.append("timer", timer.time + " " + timer.text);

          }
        });
        let Cookies = Cookie.get();

        await axios
            .post("https://blogersbackend.gastrosoft.by/course/timer/" + this.lessonId + "/", formData, {
              headers: {
                Authorization: `Token ${Cookies.token}`,
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: function (progressEvent) {
                this.uploadPercentage = parseInt(
                    Math.round((progressEvent.loaded / progressEvent.total) * 500)
                );
              }.bind(this),
            })
            .then(function () {
              this.$root.$emit("createAlertGood");
              console.log("SUCCESS!!");
            })
            .catch(function () {
              console.log("FAILURE!!");
            });
      }

    },
  }
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
    color: #fff;
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
