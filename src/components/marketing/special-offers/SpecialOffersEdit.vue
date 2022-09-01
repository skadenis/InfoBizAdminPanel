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
      <img :src="config.basicImageURL+this.offer.image" alt="" width="100">
      <p class="file-info">
        Рекомендуемый размер картинки ширина: 656px, высота: 388px
      </p>
    </a-form-model-item>

    <a-form-model-item>
      <a-row type="flex" :gutter="24" class="bottom-buttons">
        <a-col :span="24" :lg="12" :md="24">
          <a-button class="button" type="primary" @click="edit"
          >Сохранить</a-button
          >
        </a-col>
        <a-col :span="24" :lg="12" :md="24">
          <a-button class="button" type="danger" @click="deleteOffer"
          >Удалить</a-button
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
  data(){
    return {
      offer: {
        id: null,
        header: null,
        description: null,
        image: null
      },
      config: config,
      files: {
        image: null
      }
    }
  },
  created() {
    this.get();
  },
  methods: {
    handleImageUpload() {
      this.files.image = this.$refs.file.files[0];
    },
    async edit (){
      let formData = new FormData();

      formData.append("special_id", this.$route.params.id);
      formData.append("header", this.offer.header);
      formData.append("description", this.offer.description);

      if(this.files.image !== null){
        formData.append("image", this.files.image);
      }

      await SpecialOffersAPI.edit(formData)
          .then(response => {
            this.$root.$emit("createAlertGood");
            this.offer = response.data
          })
          .catch((e) => {
            console.log(e);
          })
    },
    async deleteOffer (){
      await SpecialOffersAPI.delete(this.$route.params.id)
          .then(response => {
            this.$root.$emit("createAlertGood");
            this.goTo('/marketing/offers/')
          })
          .catch((e) => {
            console.log(e);
          })
    },
    get: function (){
      SpecialOffersAPI.get(this.$route.params.id)
          .then(response => {
            this.offer = response.data;
          })
          .catch((e) => {
            console.log(e);
          })
    }
  }
}
</script>

<style scoped>

</style>