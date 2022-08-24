<template>
  <div>
    <div class="student" @click="open_student(data.id)">
      <p>{{ data.name }}</p>
      <p>{{ data.lastName }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "student",
  props: ["data"],
  methods: {
    goTo: function(data) {
      this.$router.push(data);
    },
    open_student: function(id) {
      this.goTo("/students/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.student {
  display: flex;

  margin: 15px 0;
  padding: 10px;

  background-color: #fafafa;
  border: 1px dashed #d9d9d9;

  color: #000;
  cursor: pointer;

  &:hover {
    background-color: rgb(223, 239, 255);
    border: 1px dashed rgb(37, 147, 252);
  }

  p {
    margin-right: 15px;
    font-size: 1.2em;
  }
}
</style>
