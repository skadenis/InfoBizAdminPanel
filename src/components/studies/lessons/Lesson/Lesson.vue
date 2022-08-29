<template>
  <div class="module">
    123
  </div>
</template>

<script>
export default {
  name: "module",
  props: ["data", "courseId"],
  methods: {
    goTo: function(data) {
      this.$router.push(data);
    },
    open_module: function(courseId, id) {
      this.goTo("/courses/" + courseId + "/modules/" + id);
      console.log(courseId);
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
