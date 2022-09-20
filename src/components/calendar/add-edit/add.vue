<template>
  <div>
    <a-form-model-item label="Название">
      <a-input v-model="event.header" />
    </a-form-model-item>

    <a-form-model-item label="Описание">
      <a-textarea rows="4" v-model="event.description" />
    </a-form-model-item>

    <a-form-model-item label="Дата">
      <a-input type="date" v-model="event.date" />
    </a-form-model-item>

    <a-form-model-item label="Время">
      <a-input type="time" v-model="event.time" />
    </a-form-model-item>

    <a-form-model-item label="Отображать студентам курса">
      <a-switch v-model="show.courses"/>
    </a-form-model-item>

    <a-form-model-item label="Прикрепить к курсу" v-if="show.courses">
      <a-select style="width: 100%" v-model="event.course">
        <a-select-option v-for="(course, index) in courses" :value="course.id" :key="index">
          {{ course.name }}
        </a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item label="Отображать студентам группы">
      <a-switch v-model="show.groups" />
    </a-form-model-item>

    <a-form-model-item label="Прикрепить к группе" v-if="show.groups">
      <a-select style="width: 100%" v-model="event.group">
        <a-select-option v-for="(course, index) in groups" :value="course.chat_id" :key="index">
          {{ course.group_name }}
        </a-select-option>
      </a-select>
    </a-form-model-item>

    <a-form-model-item label="Событие не имеет постоянных повторений">
      <a-switch v-model="event.non_cycle" />
    </a-form-model-item>

    <a-form-model-item label="Переодичность повторений" v-if="!event.non_cycle">
      <a-select style="width: 100%" v-model="event.period">
        <a-select-option v-for="(period, index) in cycle_period" :value="period.alias" :key="index">
          {{period.text}}
        </a-select-option>
      </a-select>
    </a-form-model-item>



    <a-form-model-item>
      <a-row type="flex" :gutter="24" class="bottom-buttons">
        <a-col :span="24" :lg="24" :md="24">
          <a-button class="button" type="primary" @click="add"
          >Добавить</a-button
          >
        </a-col>
      </a-row>
    </a-form-model-item>
  </div>
</template>

<script>
import CalendarAPI from "../../../../api/CalendarAPI";
import CoursesAPI from "../../../../api/CoursesAPI";
import GroupsAPI from "../../../../api/GroupsAPI";

export default {
  data() {
    return {
      event: {
        header: null,
        description: "",
        course: null,
        group: null,
        non_cycle: true
      },
      show: {
        courses: false,
        groups: false
      },
      courses: [],
      groups: [],
      cycle_period: [{text: "Каждый день", alias: "daily"}, {text: "Каждую неделю", alias: "weekly"}, {text: "Каждый месяц", alias: "monthly"}]
    };
  },
  created() {
    this.getCourses();
    this.getGroups()
  },
  methods: {
    getGroups: function() {
      GroupsAPI.get_all()
          .then((response) => {
            this.groups = response.data.chats;

          })
          .catch((e) => {
            console.log(e);
          });
    },
    getCourses: function() {
      CoursesAPI.get_all()
          .then((response) => {
            this.courses = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    async add() {

      let data = this.event;

      if(!this.show.groups){
        delete data.group;
      }

      if(!this.show.courses){
        delete data.course;
      }

      await CalendarAPI.add(data)
          .then((response) => {
            this.$root.$emit("createAlertGood");
            this.goTo('/calendar/'+response.data.id);
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
};
</script>

<style scoped>

</style>