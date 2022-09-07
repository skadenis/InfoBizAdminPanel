<template>
  <div class="lesson">
    <div class="lesson-item" @click="open_lesson(courseId, moduleId, data.id)">
      <div class="drag"></div>
      <img
        class="lesson-img"
        :src="config.basicImageURL + data.image"
        alt="lesson-img"
        height="80"
      />
      <div>
        <p class="lesson-name">{{ data.name }}</p>
      </div>
      <div>
        <p class="lesson-desc">{{ data.short_desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../../../config";

export default {
  name: "lesson",

  data() {
    return {
      config,
    };
  },

  props: ["data", "courseId", "moduleId"],

  methods: {
    open_lesson: function(courseId, moduleId, id) {
      this.goTo(
        "/courses/" + courseId + "/modules/" + moduleId + "/lessons/" + id
      );
    },
  },
};
</script>

<style scoped lang="scss">
.lesson {
  margin: 20px 0;
  position: relative;

  .lesson-item {
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

    .lesson-img {
      display: block;
      border-radius: 10px;
      border: 1px solid rgb(221, 221, 221);
    }

    .lesson-name {
      color: #000;
      font-size: 1.2em;
      font-weight: 600;
      margin-left: 20px;
    }

    .lesson-desc {
      margin-left: 20px;
    }
  }
}
</style>
