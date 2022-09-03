<template>
  <div>
    <div class="table__head">
      <div>
        <p>Название</p>
      </div>
      <div>
        <p>Курс</p>
      </div>
      <div>
        <p>Урок</p>
      </div>
      <div>
        <p>Студент</p>
      </div>
    </div>
    <Homework
        v-for="(calendar, hIndex) in calendars"
        v-bind:data="calendar"
        :key="hIndex"
    ></Homework>
  </div>
</template>

<script>
import Homework from "../homeworks/Homework/Homework.vue";
import CalendarAPI from "../../../api/CalendarAPI";

export default {
  components: {
    Homework,
  },
  data() {
    return {
      calendars: [],
    };
  },

  mounted() {
    this.getCalendar();
  },

  methods: {
    getCalendar: function() {
      CalendarAPI.get_all()
          .then((response) => {
            this.calendars = response.data;
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
