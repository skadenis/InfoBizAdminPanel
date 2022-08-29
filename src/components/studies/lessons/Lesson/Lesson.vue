<template>
  <div class="lesson">
    <div class="lesson-item" @click="open_lesson(courseId, moduleId, data.id)">
      <div>
        <p class="module-name">{{ data.name }}</p>
      </div>
      <div>
        <p>{{ data.description }}</p>
      </div>
      <div>
        <p>{{ data.icon_src }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lesson",
  props: ["data", "courseId", "moduleId"],
  methods: {
    goTo: function(data) {
      this.$router.push(data);
    },
    open_lesson: function(courseId, moduleId, id) {
      this.goTo(
        "/courses/" + courseId + "/modules/" + moduleId + "/lessons/" + id
      );
    },
  },
};
</script>

<style scoped lang="scss">
.module {
  margin: 20px 0;
  .module-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 20px;
    height: 100px;

    &:hover {
      background-color: rgb(223, 239, 255);
    }

    &:hover p {
      color: #000;
    }

    div {
      width: 20%;

      p {
        padding: 10px;
      }
    }

    .module-name {
      color: #000;
      font-size: 1.2em;
      font-weight: 600;
    }
  }
}
</style>
