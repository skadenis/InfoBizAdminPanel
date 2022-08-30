<template>
  <div>
    <div class="student" @click="">
      <div>
        <a-input v-model="data.time"></a-input>
      </div>
      <div>
        <a-textarea v-model="data.text"></a-textarea>
      </div>
      <div>
        <p><a-button class="button" type="danger">Удалить</a-button></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  methods: {

  },
};
</script>

<style scoped lang="scss">
.student {
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid rgb(221, 221, 221);
  margin: -1px 0;

  &:hover {
    background-color: rgb(223, 239, 255);
  }

  &:hover p {
    color: #000;
  }

  div {
    width: calc(100%/3);
    border-right: 1px solid rgb(221, 221, 221);
    line-height: 1.2;

    &:last-child {
      border-right: none;
    }

    p {
      padding: 10px;
    }
  }
}
</style>
