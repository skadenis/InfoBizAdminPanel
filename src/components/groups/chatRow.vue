<template>
  <div @click="goTo('/groups/' + data.chat_id)">
    <div class="timing">
      <div>
        <p>{{ index + 1 }}</p>
      </div>
      <div>
        <p>{{ data.group_name }}</p>
      </div>
      <div>
        <p>{{ data.chat_name }}</p>
      </div>
      <div>
        <p>{{ data.users_count }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";

export default {
  props: ["data", "index"],
  methods: {},
  data() {
    return {
      config,
    };
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

  &:hover {
    background-color: rgb(223, 239, 255);
  }

  &:hover p {
    color: #000;
  }

  div {
    width: calc(100% / 4);
    border-right: 1px solid rgb(221, 221, 221);

    &:last-child {
      border-right: none;
    }

    p {
      padding: 10px;
      font-size: 14px;
    }
  }
}

.button {
  color: #fff;
}
</style>
