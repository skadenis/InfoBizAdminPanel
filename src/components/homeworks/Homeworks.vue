<template>
  <div>
    <div class="table__head">
      <div>
        <p>Название</p>
      </div>
      <div>
        <p>Статус</p>
      </div>
      <div>
        <p>Курс</p>
      </div>
      <div>
        <p>Модуль</p>
      </div>
      <div>
        <p>Урок</p>
      </div>
      <div>
        <p>Студент</p>
      </div>
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
.table__head {
  display: flex;
  background-color: rgb(221, 221, 221);

  div {
    width: 25%;
    border-right: 1px solid #fff;

    &:last-child {
      border-right: none;
    }
  }

  p {
    padding: 10px;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
}
</style>
