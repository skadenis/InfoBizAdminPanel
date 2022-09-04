<template>
  <div>
    <button class="add__courses-btn" @click="goTo('/calendar/add')">
      Добавить событие
    </button>
    <div class="table__head">
      <div>
        <p>Название</p>
      </div>
      <div>
        <p>Дата</p>
      </div>
      <div>
        <p>Время</p>
      </div>
      <div>
        <p>Для кого</p>
      </div>
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
