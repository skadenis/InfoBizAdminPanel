<template>
  <div>
    <div class="table">
      <p>Название</p>
      <p>Статус</p>
      <p>Курс</p>
      <p>Модуль</p>
      <p>Урок</p>
      <p>Студент</p>
    </div>
    <Homework
      v-for="(homework, hIndex) in homeworks"
      v-bind:data="homework"
      :hIndex="hIndex"
      :key="hIndex"
    ></Homework>
  </div>
</template>

<script>
import Homework from "./Homework/Homework.vue";
import HomeworkAPI from "../../../api/HomeworkAPI";

export default {
  components: {
    Homework,
  },
  data() {
    return {
      homeworks: null,
    };
  },

  mounted() {
    this.getHomeworks();
  },

  methods: {
    getHomeworks: function() {
      HomeworkAPI.get_all()
        .then((response) => {
          this.homeworks = response.data.homeworks;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  display: flex;
  width: 100%;
  margin-top: 20px;

  p {
    box-sizing: border-box;

    font-weight: 600;
    color: #000;

    border-right: 1px solid #eee;
    white-space: nowrap;

    text-align: center;

    background: #ddd;
    padding: 10px 0;
    line-height: 14px;
    width: calc(100% / 6);
  }
}
</style>
