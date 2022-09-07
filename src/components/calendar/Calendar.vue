<template>
  <div>
    <button class="add-btn" @click="goTo('/calendar/add')">
      Добавить событие
    </button>
    <div class="table">
      <p>Название</p>
      <p>Дата</p>
      <p>Время</p>
      <p>Для кого</p>
    </div>
    <CalendarRow
      v-for="(calendar, hIndex) in calendars"
      v-bind:data="calendar"
      :key="hIndex"
      :hIndex="hIndex"
    ></CalendarRow>
  </div>
</template>

<script>
import CalendarRow from "../calendar/calendarRow";
import CalendarAPI from "../../../api/CalendarAPI";

export default {
  components: {
    CalendarRow,
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
.table {
  margin-top: 20px;
  display: flex;
  width: 100%;

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
    width: calc(100% / 4);
  }
}
</style>
