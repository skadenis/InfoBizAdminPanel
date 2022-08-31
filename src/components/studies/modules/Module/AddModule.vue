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
        <a-form-model-item label="Основная картинка">
          <input
            type="file"
            id="file"
            ref="file"
            v-on:change="handleFileUpload()"
          />
          <p class="file-info">
            Рекомендуемый размер картинки ширина: 656px, высота: 388px
          </p>
        </a-form-model-item>
        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="bottom-buttons">
            <a-col :span="24" :lg="24" :md="24">
              <a-button class="button" type="primary" @click="add"
                >Добавить модуль</a-button
              >
            </a-col>
          </a-row>
        </a-form-model-item>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ModulesAPI from "../../../../../api/ModulesAPI";

export default {
  props: ["courseId"],
  data() {
    return {
      module: {
        name: null,
        description: null,
      },
      file: null,
    };
  },
  methods: {
    async add() {
      let formData = new FormData();

      formData.append("name", this.module.name);
      formData.append("course", this.courseId);
      formData.append("description", this.module.description);

      if (this.file) {
        formData.append("image", this.file);
      }

      await ModulesAPI.add(formData)
        .then((response) => {
          this.$root.$emit("createAlertGood");
          this.goTo(
            "/courses/" + this.courseId + "/modules/" + response.data.id
          );
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped lang="scss">
.bottom-buttons {
  width: 100%;

  .button {
    width: 100%;
  }
}

.file-info {
  font-size: 0.8em;
}
</style>
