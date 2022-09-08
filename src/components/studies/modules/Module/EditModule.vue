<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название">
          <a-input v-model="module.name" />
        </a-form-model-item>
        <a-form-model-item label="Описание">
          <a-textarea rows="4" v-model="module.description" />
        </a-form-model-item>
        <a-form-model-item label="Модуль доступен?">
          <a-switch rows="4" v-model="module.perm"/>
        </a-form-model-item>
        <a-form-model-item label="Основная картинка">
          <input
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
          <img :src="config.basicImageURL + module.image" alt="" width="100" />

          <p class="file-info">
            Рекомендуемый размер картинки ширина: 656px, высота: 388px
          </p>
        </a-form-model-item>
        <a-form-model-item label="Модуль учитывается в рассчете прогресса:">
          <a-switch v-model="module.education" />
        </a-form-model-item>
        <a-form-model-item label="Модуль доступен с:">
          <a-input type="datetime-local" v-model="module.open_time" />
        </a-form-model-item>
        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="bottom-buttons">
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="primary" @click="edit"
                >Сохранить</a-button
              >
            </a-col>
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="danger" @click="deleteModule"
                >Удалить</a-button
              >
            </a-col>
          </a-row>
        </a-form-model-item>
      </a-col>
    </a-row>
    <p class="lessons-inc">Вложенные уроки:</p>
    <Lessons
      v-bind:courseId="courseId"
      v-bind:moduleId="moduleId"
      v-bind:data="module"
    ></Lessons>
  </div>
</template>

<script>
import config from "../../../../config";
import Lessons from "../../lessons/Lessons.vue";
import ModulesAPI from "../../../../../api/ModulesAPI";

export default {
  props: ["courseId", "moduleId"],
  components: {
    Lessons,
  },
  data() {
    return {
      module: {
        name: null,
        description: null,
        perm: false,
        education: false
      },
      file: undefined,
      config: config,
    };
  },

  mounted() {
    this.getModule();
  },
  methods: {
    getModule: function() {
      ModulesAPI.get(this.moduleId)
        .then((response) => {
          this.module = response.data;

          let dt = new Date(this.module.open_time);
          console.log(dt);
          console.log(new Date().getTimezoneOffset())
          dt.setHours(dt.getHours() - (new Date().getTimezoneOffset())/60);

          this.module.open_time = dt.toISOString().replace('Z',"");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async edit() {
      let formData = new FormData();
      formData.append("course", this.courseId);
      formData.append("module", this.moduleId);
      formData.append("name", this.module.name);
      formData.append("education", this.module.education);
      if(this.module.open_time !== ""){
        formData.append("open_time", new Date(this.module.open_time).toISOString() );
      }else {
        formData.append("open_time", null);
      }

      formData.append("perm", this.module.perm);
      formData.append("description", this.module.description);

      if (this.file) {
        formData.append("image", this.file);
      }

      await ModulesAPI.edit(formData)
        .then((response) => {
          this.$root.$emit("createAlertGood");
          this.getModule();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async deleteModule() {
      let axiosRes = null;

      await ModulesAPI.delete(this.moduleId)
        .then((response) => {
          axiosRes = response;
          this.$root.$emit("createAlertGood");
        })
        .catch((e) => {
          console.log(e);
        });
      console.log(axiosRes);
      if (axiosRes.status === 204) {
        this.goTo("/courses/" + this.courseId);
      }
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped lang="scss">
.module-info {
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
  margin-bottom: 20px;

  .button {
    width: 100%;
    color: #fff;
  }
}
.lessons-inc {
  color: #000;
  font-weight: 700;
  margin-bottom: 15px;
}

.file-info {
  font-size: 0.8em;
}
</style>
