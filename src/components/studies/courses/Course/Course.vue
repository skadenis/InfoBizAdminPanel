<template>
  <div class="course">
    <div class="course-item" @click="open_course(data.id)">
      <div>
        <p class="course-name">{{ data.name }}</p>
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
  name: "course",
  props: ["data"],
  methods: {
    goTo: function(data) {
      this.$router.push(data);
    },
    open_course: function(id) {
      this.goTo("/courses/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.course {
  margin: 20px 0;

  .course-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;
    min-height: 100px;

    &:hover {
      background-color: rgb(223, 239, 255);
    }

    &:hover p {
      color: #000;
    }

    div {
      p {
        padding: 10px;
      }
    }

    .course-name {
      color: #000;
      font-size: 1.2em;
      font-weight: 600;
    }
  }
}
</style>
