<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название">
          <a-input v-model="course.name" />
        </a-form-model-item>
        <a-form-model-item label="Описание">
          <a-textarea rows="4" v-model="course.description" />
        </a-form-model-item>
        <a-form-model-item label="Курс общедоступный?">
          <a-switch v-model="course.status" />
        </a-form-model-item>
        <a-form-model-item label="Основная картинка">
          <input
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
          <img :src="config.basicImageURL + course.image" alt="" width="100" />
          <p class="file-info">
            Рекомендуемый размер картинки ширина: 656px, высота: 388px
          </p>
        </a-form-model-item>
        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="buttons__block">
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="primary" @click="edit"
                >Сохранить</a-button
              >
            </a-col>
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="danger" @click="deleteCourse"
                >Удалить</a-button
              >
            </a-col>
          </a-row>
        </a-form-model-item>
        <a-form-model-item label="Вложенные модули:">
          <Modules :courseId="courseId" :data="modules"></Modules>
        </a-form-model-item>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import config from "../../../../config";
import Modules from "../../modules/Modules.vue";
import CoursesAPI from "../../../../../api/CoursesAPI";
import axios from "axios";

export default {
  props: ["courseId"],
  components: {
    Modules,
  },
  data() {
    return {
      course: {
        name: null,
        description: null,
        status: false
      },
      config: config,
      modules: [],
      file: null,
    };
  },
  mounted() {
    this.getCourse();
  },
  methods: {
    getCourse: function() {
      CoursesAPI.get(this.courseId)
        .then((response) => {
          this.course = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    async edit() {
      let formData = new FormData();
      formData.append("course_id", this.courseId);
      formData.append("name", this.course.name);
      formData.append("status", this.course.status);
      formData.append("description", this.course.description);

      if (this.file) {
        formData.append("image", this.file);
      }

      await CoursesAPI.edit(formData)
        .then((response) => {
          this.$root.$emit("createAlertGood");
          this.goTo("/courses/" + response.data.id);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async deleteCourse() {
      let axiosRes = null;

      await CoursesAPI.delete(this.courseId)
        .then((response) => {
          axiosRes = response;
        })
        .catch((e) => {
          console.log(e);
        });

      if (axiosRes.status === 204) {
        this.$root.$emit("createAlertGood");
        this.goTo("/courses/");
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped lang="scss"></style>
