<template>
  <div>
    <div class="student">
      <div @click="open_student(data.id)">
        <p>{{ data.firstname }}</p>
      </div>
      <div @click="open_student(data.id)">
        <p>{{ data.lastname }}</p>
      </div>
      <div @click="open_student(data.id)">
        <p>{{ data.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "student",
  props: ["data", "CourseId", "showDelete"],
  methods: {
    open_student: function(id) {
      this.goTo("/users/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.del-button {
  color: rgba(0, 0, 0, 0.65);
  &:hover,
  &:focus {
    color: rgb(253, 79, 84);
  }
}
.student {
  display: flex;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: rgb(223, 239, 255);
  }

  &:hover p {
    color: #000;
  }
  div {
    width: calc(100% / 3);
    box-sizing: border-box;
    border-bottom: 1px solid rgb(221, 221, 221);
    border-right: 1px solid rgb(221, 221, 221);
    &:first-child {
      border-left: 1px solid rgb(221, 221, 221);
    }

    p {
      padding: 10px;
    }
  }
}
</style>
