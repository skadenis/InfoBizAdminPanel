<template>
  <div class="timing">
    <div><a-input class="timing-input" v-model="data.time"></a-input></div>
    <div>
      <a-textarea
        rows="4"
        class="timing-input"
        v-model="data.text"
      ></a-textarea>
    </div>
    <div>
      <a-button class="del-button" @click="deleteTiming"
        ><i class="pi pi-trash"></i
      ></a-button>
    </div>
  </div>
</template>

<script>
import LessonsAPI from "../../../../../api/LessonsAPI";
import "primeicons/primeicons.css";

export default {
  props: ["data"],
  methods: {
    deleteTiming() {
      LessonsAPI.deleteTiming(this.data.id)
        .then((response) => {
          this.$root.$emit("createAlertGood");
          this.$root.$emit("renewData");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.timing {
  width: 100%;
  display: flex;

  div {
    box-sizing: border-box;
    border-bottom: 1px solid rgb(221, 221, 221);
    border-right: 1px solid rgb(221, 221, 221);
    &:first-child {
      width: 20%;
      border-left: 1px solid rgb(221, 221, 221);
    }

    &:nth-child(2) {
      width: 60%;
    }

    &:last-child {
      width: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.timing-input {
  border: none;
  height: 100%;
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
