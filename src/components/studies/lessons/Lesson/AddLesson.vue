<template>
  <div>
    <a-row>
      <a-col>
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

          <p class="file-info">Рекомендуемый размер</p>
        </a-form-model-item>

        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="buttons__block">
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
import TimingRow from "./TimingRow";
import FileRow from "./FileRow";

export default {
  props: ["courseId", "moduleId"],
  components: {
    TimingRow,
    FileRow,
  },
  data() {
    return {
      lesson: {
        name: "",
        description: "",
        question: "",
        timer_set: [],
        lessonfiles_set: [],
      },

      files: {
        image: null,
        video: null,
        files: [],
        background_image: null,
      },
    };
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
    async add() {
      let formData = new FormData();

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
        .then((response) => {
          resultAxios = response;
        })
        .catch((e) => {
          console.log(e);
        });

      if (resultAxios.status === 200) {
        this.$root.$emit("createAlertGood");
        this.goTo(
          "/courses/" +
            this.courseId +
            "/modules/" +
            this.moduleId +
            "/lessons/" +
            resultAxios.data.id
        );
      }
    },
    addTiming() {
      this.lesson.timer_set.push({
        time: "00:00:00",
        text: "",
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
