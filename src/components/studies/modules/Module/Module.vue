<template>
  <div>
    <div class="module" @click="open_module(data.id)">
      <div>
        <p>{{ data[courseId].modules[0].name }}</p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
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
    open_module: function(id) {
      this.goTo("/courses/" + id + "/edit/" + "modules/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.course {
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
    width: 20%;
    border-right: 1px solid rgb(221, 221, 221);

    &:last-child {
      border-right: none;
    }

    p {
      padding: 10px;
    }
  }
}
</style>
