<template>
  <div>
    <a-form-model-item label="Фамилия">
      <a-input v-model="student.lastname" readonly="true" />
    </a-form-model-item>
    <a-form-model-item label="Имя">
      <a-input v-model="student.firstname" readonly="true" />
    </a-form-model-item>

    <a-form-model-item label="Email">
      <a-input v-model="student.email" readonly="true" />
    </a-form-model-item>

    <a-form-model-item label="Курсы студента:">
      <div>
        Какая то таблица
      </div>
    </a-form-model-item>

    <div>
      <a-form-model-item label="Добавить студента к курсу">
        <a-select style="width: 100%" v-model="addForm">
          <a-select-option
            v-for="(course, index) in courses"
            :value="course.id"
            :key="index"
          >
            {{ course.name }}
          </a-select-option>
        </a-select>
      </a-form-model-item>

      <a-button
        class="add-btn groups-btn"
        type="primary"
        @click="addSudentToCourse"
        >Добавить в группу</a-button
      >
    </div>
  </div>
</template>

<script>
import StudentsAPI from "../../../../api/StudentsAPI";
import CoursesAPI from "../../../../api/CoursesAPI";

export default {
  props: ["studentId"],
  data() {
    return {
      student: null,
      courses: [],
      addForm: null,
    };
  },

  mounted() {
    this.getStudent();
    this.getCourses();
  },

  methods: {
    getCourses: function() {
      CoursesAPI.get_all()
        .then((response) => {
          this.courses = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getStudent: function() {
      StudentsAPI.get(this.studentId)
        .then((response) => {
          this.student = response.data;
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addSudentToCourse() {
      StudentsAPI.addToCourse(this.studentId, this.addForm)
        .then((response) => {})
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.groups-btn {
  margin-top: 20px;
}
</style>
