<template>
  <div class="course">
    <div class="course-item" @click="open_course(data.id)">
      <div class="drag"></div>
      <img
        class="course-img"
        :src="config.basicImageURL + data.image"
        alt="course-img"
        height="80"
      />
      <div>
        <p class="course-name">{{ data.name }}</p>
      </div>
      <div>
        <p class="course-desc">{{ data.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import config from "../../../../config";
export default {
  name: "course",
  props: ["data"],

  data() {
    return {
      config,
    };
  },

  mounted() {
    this.getStudents();
  },
  methods: {
    open_course: function(id) {
      this.goTo("/courses/" + id);
    },
    getStudents: function() {
      console.log(this.data);
    },
  },
};
</script>

<style scoped lang="scss">
.course {
  margin: 20px 0;
  position: relative;

  .course-item {
    display: flex;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 10px;

    min-height: 100px;
    padding: 10px;

    &:hover {
      background-color: rgb(223, 239, 255);
    }

    &:hover p {
      color: #000;
    }

    .course-img {
      display: block;
      border-radius: 10px;
      border: 1px solid rgb(221, 221, 221);
    }

    .course-name {
      color: #000;
      font-size: 1.2em;
      font-weight: 600;
      margin-left: 20px;
    }

    .course-desc {
      margin-left: 20px;
    }
  }
}
</style>
