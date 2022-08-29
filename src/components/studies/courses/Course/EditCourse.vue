<template>
  <div>
    <div class="course-info">
      <p class="name">{{ course[courseId - 1].name }}</p>
      <p class="description">{{ course[courseId - 1].description }}</p>
    </div>
    <p>Вложенные модули:</p>
    <Modules v-bind:courseId="courseId" v-bind:data="course"></Modules>
    <a-row type="flex" :gutter="24" class="bottom-buttons">
      <a-col :span="24" :lg="12" :md="24">
        <a-button class="button" type="primary">Сохранить</a-button>
      </a-col>
      <a-col :span="24" :lg="12" :md="24">
        <a-button class="button" type="danger">Удалить</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import state from "../../../../store/state";
import Modules from "../../modules/Modules.vue";

export default {
  props: ["courseId"],
  components: {
    Modules,
  },
  data() {
    return {
      course: null,
    };
  },

  mounted() {
    this.getCourse();
  },

  methods: {
    getCourse: function() {
      this.course = state.courses;
    },
  },
};
</script>

<style scoped lang="scss">
.course-info {
  margin: 10px 0;

  .name {
    margin-bottom: 20px;
    color: black;
    font-weight: 600;
    font-size: 1.2em;
  }
}

.bottom-buttons {
  width: 100%;

  .button {
    width: 100%;
  }
}
</style>
