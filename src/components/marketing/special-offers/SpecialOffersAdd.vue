<template>
  <div>
    <a-form-model-item label="Название">
      <a-input v-model="offer.header" />
    </a-form-model-item>

    <a-form-model-item label="Текст">
      <a-textarea rows="4" v-model="offer.description" />
    </a-form-model-item>

    <a-form-model-item label="Картинка">
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

    <a-form-model-item>
      <a-row type="flex" :gutter="24" class="buttons-block">
        <a-col :span="24" :lg="24" :md="24">
          <a-button class="button" type="primary" @click="add"
            >Добавить</a-button
          >
        </a-col>
      </a-row>
    </a-form-model-item>
  </div>
</template>

<script>
import config from "@/config";
import SpecialOffersAPI from "../../../../api/SpecialOffersAPI";

export default {
  data() {
    return {
      offer: {
        header: null,
        description: null,
        image: null,
      },
      config: config,
      files: {
        image: null,
      },
    };
  },
  methods: {
    handleImageUpload() {
      this.files.image = this.$refs.file.files[0];
    },
    async add() {
      let formData = new FormData();

      formData.append("header", this.offer.header);
      formData.append("description", this.offer.description);

      if (this.files.image !== null) {
        formData.append("image", this.files.image);
      }

      await SpecialOffersAPI.add(formData)
        .then((response) => {
          this.$root.$emit("createAlertGood");
          this.goTo("/marketing/offers/" + response.data.id);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss"></style>
