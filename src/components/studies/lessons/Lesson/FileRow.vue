<template>
  <div>
    <div class="timing" @click="">
      <div>
        {{index+1}}
      </div>
      <div>
        <a :href="config.basicImageURL+data.file">Просмотерть файл</a>
      </div>
      <div>
        Удалить файл
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";

export default {
  props: ["data","index"],
  methods: {},
  data(){
    return{
      config
    }
  }
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
