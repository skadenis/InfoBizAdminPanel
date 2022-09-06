<template>
  <div>
    <div class="student" @click="open_student(data.id)">
      <div>
        <p>{{ data.firstname }}</p>
      </div>
      <div>
        <p>{{ data.lastname }}</p>
      </div>
      <div>
        <p>{{ data.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "student",
  props: ["data"],
  methods: {
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
