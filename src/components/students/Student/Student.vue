<template>
  <div>
    <div class="student" @click="open_student(data.id)">
      <div>
        <p>{{ data.name }}</p>
      </div>
      <div>
        <p>{{ data.lastName }}</p>
      </div>
      <div>
        <p>{{ data.courseId }}</p>
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
