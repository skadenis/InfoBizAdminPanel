<template>
  <div>
    <div class="timing">
      <div>
        <a-input class="timing-input" v-model="data.time"></a-input>
      </div>
      <div>
        <a-textarea
          rows="4"
          class="timing-input"
          v-model="data.text"
        ></a-textarea>
      </div>
      <div>
        <a-button class="button" type="danger" @click="deleteTiming">Удалить</a-button>
      </div>
    </div>
  </div>
</template>

<script>
import LessonsAPI from "../../../../../api/LessonsAPI";

export default {
  props: ["data"],
  methods: {
    deleteTiming(){
      LessonsAPI.deleteTiming(this.data.id)
          .then(response => {
            this.$root.$emit("createAlertGood");
            this.$root.$emit("renewData");
          })
          .catch((e) => {
            console.log(e);
          })
    }
  },

};
</script>

<style scoped lang="scss">
.timing {
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid rgb(221, 221, 221);
  margin: -1px 0;

  div {
    border-right: 1px solid rgb(221, 221, 221);

    &:first-child {
      width: 20%;
    }

    &:nth-child(2) {
      width: 60%;
    }

    &:last-child {
      width: 20%;
      border-right: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &-input {
    border: none;
    height: 100%;
  }
}

.button {
  color: #fff;
}
</style>
