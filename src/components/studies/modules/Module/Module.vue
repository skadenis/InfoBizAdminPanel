<template>
  <div class="module">
    <div class="module-item" @click="open_module(courseId, data.id)">
      <div class="drag"></div>

      <img
        class="module-img"
        :src="config.basicImageURL + data.image"
        alt="module-img"
        height="80"
      />
      <div>
        <p class="module-name">{{ data.name }}</p>
      </div>
      <div>
        <p class="module-desc">{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../../../config";

export default {
  name: "module",
  props: ["data", "courseId"],
  data() {
    return {
      config,
    };
  },
  methods: {
    open_module: function(courseId, id) {
      this.goTo("/courses/" + courseId + "/modules/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.module {
  margin: 20px 0;
  position: relative;
  .module-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    min-height: 100px;
    padding: 10px;

    &:hover {
      background-color: rgb(223, 239, 255);
    }

    &:hover p {
      color: #000;
    }

    .module-img {
      display: block;
      border-radius: 10px;
      border: 1px solid rgb(221, 221, 221);
    }

    .module-name {
      color: #000;
      font-size: 1.2em;
      font-weight: 600;
      margin-left: 20px;
    }

    .module-desc {
      margin-left: 20px;
    }
  }
}
</style>
