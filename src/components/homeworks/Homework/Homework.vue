<template>
  <div>
    <div class="homework" @click="open_homework(data.id)">
      <div>
        <p>{{ hIndex + 1 }}</p>
      </div>
      <div>
        <p>{{ data.status | HomeworkStatus }}</p>
      </div>
      <div>
        <p>{{ data.study.course_name }}</p>
      </div>
      <div>
        <p>{{ data.study.module_name }}</p>
      </div>
      <div>
        <p>{{ data.study.lesson_name }}</p>
      </div>
      <div>
        <p>{{ data.user.lastname }} {{ data.user.firstname }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homework",
  props: ["data", "hIndex"],
  methods: {
    open_homework: function(id) {
      this.goTo("/homeworks/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.homework {
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
    width: calc(100% / 6);
    box-sizing: border-box;
    border-bottom: 1px solid rgb(221, 221, 221);
    overflow: hidden;
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
