<template>
  <div>
    <div class="file">
      <div>
        {{ index + 1 }}
      </div>
      <div>
        <a :href="config.basicImageURL + data.file">Просмотерть файл</a>
      </div>
      <div>
        <a-button class="del-button" @click="deleteFile"
          >
<!--          <i class="pi pi-trash"></i-->
        ></a-button>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";
import LessonsAPI from "../../../../../api/LessonsAPI";
// import "primeicons/primeicons.css";

export default {
  props: ["data", "index"],
  methods: {
    deleteFile() {
      LessonsAPI.deleteFile(this.data.id)
        .then((response) => {
          this.$root.$emit("createAlertGood");
          this.$root.$emit("renewData");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  data() {
    return {
      config,
    };
  },
};
</script>

<style scoped lang="scss">
.file {
  width: 100%;
  display: flex;

  div {
    box-sizing: border-box;
    border-bottom: 1px solid rgb(221, 221, 221);
    border-right: 1px solid rgb(221, 221, 221);
    &:first-child {
      width: 20%;
      text-align: center;
      border-left: 1px solid rgb(221, 221, 221);
    }

    &:nth-child(2) {
      width: 60%;
      padding-left: 10px;
    }

    &:last-child {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.del-button {
  color: rgb(160, 160, 160);

  &:hover,
  &:focus {
    border-color: rgb(253, 79, 84);
    color: white;
    background-color: rgb(253, 79, 84);
  }
}
</style>
