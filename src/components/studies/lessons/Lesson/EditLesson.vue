<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Статус загрузки">
          <div class="progress-bar">
            <div
              class="progress"
              :style="'width:' + uploadPercentage / 10 + '%'"
            ></div>
          </div>
          <p class="progress-status">{{ uploadPercentage }} из 1000</p>
        </a-form-model-item>

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
          <vue-editor :editorOptions="{
          modules: {
            imageDrop: false
          }
        }"  v-model="lesson.question" ></vue-editor>
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
          <p class="file-info">
            Рекомендуемый размер картинки ширина: 656px, высота: 388px
          </p>
        </a-form-model-item>

        <a-form-model-item label="Видео">
          <input
            type="file"
            id="video"
            ref="video"
            v-on:change="handleVideoUpload()"
          />

          <video
              v-if="lesson.video !== null"
            autoplay="autoplay"
            controls="controls"
            :src="config.basicVideoURL + lesson.video"
            width="200"
            height="auto"
          ></video>
          <p class="file-info">Рекомендуемый размер</p>
        </a-form-model-item>

        <a-form-model-item label="Тайминг">
          <div class="table" v-if="lesson.timer_set.length > 0">
            <p>Время</p>
            <p>Описание</p>
            <p>Удалить тайминг</p>
          </div>

          <TimingRow
            v-for="(timing, index) in lesson.timer_set"
            :data="timing"
            :key="index"
          />
          <a-button class="add-btn timing-btn" type="primary" @click="addTiming"
            >Добавить тайминг</a-button
          >
          <p class="file-info">Рекомендуемый размер</p>
        </a-form-model-item>

        <a-form-model-item label="Дополнительные материалы">
          <div class="table" v-if="lesson.lessonfiles_set.length > 0">
            <p>№</p>
            <p>Превью</p>
            <p>Удалить файл</p>
          </div>
          <FileRow
            v-for="(timing, index) in lesson.lessonfiles_set"
            :data="timing"
            :index="index"
            :key="index"
          />

          <input
            class="file-input"
            type="file"
            id="homework"
            ref="homework"
            multiple
            v-on:change="handleFilesUpload()"
          />
          <p class="file-info">Формат PDF</p>
        </a-form-model-item>

        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="buttons__block">
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


        <a-form-model-item label="Тестирование">
          <div class="add_block" v-if="test.length === 0" @click="addTest()">Добавить тестирование</div>
          <div class="test_block" v-for="(test, testIndex) in test" :key="testIndex">
            <a-form-model-item label="Название">
              <a-input v-model="test.name" />
            </a-form-model-item>
            <div class="question_wrapper" v-for="(question, questionIndex) in test.questions" :key="questionIndex">
              <div class="question_text">
                <a-form-model-item label="Вопрос">
                  <a-textarea v-model="question.name" />
                </a-form-model-item>
              </div>
              <div class="question_answers_variants_wrapper">
                <div class="question_answers_variant_block" v-for="(variant, variantIndex) in question.variants">
                  <a-form-model-item label="Ответ">
                    <a-textarea v-model="variant.name" />
                  </a-form-model-item>
                </div>
                <div class="question_answers_variant_block add_block" @click="addAnswerVariant(testIndex, questionIndex)">
                  Добавить вариант ответа
                </div>
              </div>
            </div>
            <div class="question_wrapper add_block" @click="addQuestion(testIndex)">
              Добавить вопрос
            </div>
          </div>

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
import { VueEditor } from "vue2-editor";


export default {
  props: ["courseId", "moduleId", "lessonId"],
  components: {
    TimingRow,
    FileRow,
    VueEditor
  },
  data() {
    return {
      lesson: {
        name: null,
        text: null,
        question: null,
        timer_set: [],
        lessonfiles_set: [],
        short_desc: "",
      },

      files: {
        image: null,
        video: null,
        files: [],
        background_image: null,
      },
      config: config,
      test: [],
      uploadPercentage: 0,
    };
  },
  created() {
    this.$root.$on("renewData", this.getLesson);
  },
  mounted() {
    this.getLesson();
    this.getTestInfo();
  },
  methods: {
    addTest(){
      this.test.push({name: '', description: '', questions: []})
    },
    getTestInfo(){
      // this.test = [{
      //   name: '123',
      //   description: '',
      //   questions: [
      //     {
      //       name: '123 123',
      //       variants: [
      //         { name: 'lorem ipsum sit amet' },
      //         { name: 'amet lorem ipsum sit' },
      //       ]
      //     },
      //     {
      //       name: '321 321',
      //       variants: [
      //         { name: 'lorem ipsum sit amet' },
      //         { name: 'amet lorem ipsum sit' },
      //       ]
      //     }
      //   ]
      // }];
    },
    addAnswerVariant(testIndex, questionIndex){
      this.test[testIndex].questions[questionIndex].variants.push({name: ''})
    },
    addQuestion(testIndex){
      this.test[testIndex].questions.push({name: '', variants: []})
    },
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
    getLesson: function() {
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
          onUploadProgress: function(progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 500)
            );
          }.bind(this),
        })
        .then(function() {
          resultAxios = true;
          console.log("SUCCESS!!");
        })
        .catch(function(e) {
          console.log(e);
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
        .then((response) => {
          this.$root.$emit("createAlertGood");
          this.goTo("/courses/" + this.courseId + "/modules/" + this.moduleId);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async addFiles() {
      if (this.files.files.length > 0) {
        let formData = new FormData();

        this.files.files.forEach((file) => {
          formData.append("lesson_file", file);
        });
        let Cookies = Cookie.get();

        await axios
          .post(
            "https://blogersbackend.gastrosoft.by/course/file/" +
              this.lessonId +
              "/",
            formData,
            {
              headers: {
                Authorization: `Token ${Cookies.token}`,
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: function(progressEvent) {
                this.uploadPercentage = parseInt(
                  Math.round((progressEvent.loaded / progressEvent.total) * 500)
                );
              }.bind(this),
            }
          )
          .then(function() {
            this.$root.$emit("createAlertGood");
            console.log("SUCCESS!!");
          })
          .catch(function() {
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
          if (timer.id === null) {
            formData.append("timer", timer.time + " " + timer.text);
          }
        });
        let Cookies = Cookie.get();

        await axios
          .post(
            "https://blogersbackend.gastrosoft.by/course/timer/" +
              this.lessonId +
              "/",
            formData,
            {
              headers: {
                Authorization: `Token ${Cookies.token}`,
                "Content-Type": "multipart/form-data",
              },
              onUploadProgress: function(progressEvent) {
                this.uploadPercentage = parseInt(
                  Math.round((progressEvent.loaded / progressEvent.total) * 500)
                );
              }.bind(this),
            }
          )
          .then(function() {
            this.$root.$emit("createAlertGood");
            console.log("SUCCESS!!");
          })
          .catch(function() {
            console.log("FAILURE!!");
          });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  display: flex;
  width: 100%;

  p {
    box-sizing: border-box;

    font-weight: 600;
    color: #000;

    border-right: 1px solid #eee;
    white-space: nowrap;

    text-align: center;

    background: #ddd;
    padding: 10px 0;
    line-height: 14px;

    &:first-child {
      width: 20%;
    }

    &:nth-child(2) {
      width: 60%;
    }

    &:last-child {
      width: 20%;
    }
  }
}

.timing-btn {
  margin-top: 20px;
}

.file-input {
  margin-top: 20px;
}

.progress-bar {
  border-radius: 5px;
  height: 15px;

  box-shadow: -3px 4px 11px -1px rgba(0, 0, 0, 0.22) inset;

  .progress {
    border-radius: 5px;
    background-color: #1890ff;
    box-shadow: 1px 0px 1px 0px rgba(0, 0, 0, 0.2);
    height: 100%;
  }
}

.progress-status {
  line-height: 24px;
  font-size: 0.8rem;
}
.test_block{
  padding: 20px;
  background: #fafafa;
  border: 1px dashed #ccc;
  & .question_wrapper{
    padding: 5px 20px;
    margin: 20px 0;
    display: flex;
    border: 1px dashed #ccc;
    flex-direction: column;
    & .question_text{
      font-weight: bold;
    }
    & .question_answers_variants_wrapper{
      display: grid;
      grid-template-columns: 1fr 1fr;
      & .question_answers_variant_block{
        border: 1px dashed #ccc;
        margin: 5px 10px;
        padding: 5px 10px;
        font-weight: bold;
        & span{
          line-height: 2;
        }
        &:nth-child(2n + 1){
          margin: 5px 10px 5px 0;
        }
        &:nth-child(2n){
          margin: 5px 0 5px 10px;
        }
      }
    }
  }
}
.add_block{
  padding: 0!important;
  margin: 0;
  text-align: center;
  font-size: 85%;
  font-weight: bold;
  background-color: #1890ff;
  border: 0!important;
  color: #ffffff;
  cursor: pointer;
  box-shadow: 1px 0px 1px 0px rgba(0, 0, 0, 0.2);
}
</style>
