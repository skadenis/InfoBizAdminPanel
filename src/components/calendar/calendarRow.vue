<template>
  <div>
    <div class="homework" @click="goTo('/calendar/' + data.id)">
      <div>
        <p>{{ hIndex + 1 }}</p>
      </div>
      <div>
        <p>{{ data.date }}</p>
      </div>
      <div>
        <p>{{ data.time }}</p>
      </div>
      <div v-html="getText(data.course, data.group)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "hIndex"],
  methods: {
    getText(course, group) {
      let text = "";
      if (course !== null) {
        text += "Студентов курса: " + course.name + "</br>";
      }
      if (group !== null) {
        text += "Студентов группы: " + group.name + "";
      }
      return text;
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
    width: calc(100% / 4);
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
