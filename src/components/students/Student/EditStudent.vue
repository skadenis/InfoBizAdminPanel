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

    <br /><br />
    <p class="course-inc">Курсы студента</p>

    <div>
      Какая то таблица
    </div>

    <div>
      <br /><br />
      <p class="course-inc">Добавить студента к курсу</p>
      <a-select style="width: 100%" v-model:value="addForm">
        <a-select-option
          v-for="(course, index) in courses"
          :value="course.id"
          >{{ course.name }}</a-select-option
        >
      </a-select>
      <a-button class="button" type="primary" @click="addSudentToCourse"
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
.student-info {
  margin-top: 20px;
  span {
    color: black;
    font-weight: 600;
    font-size: 1.2em;
  }

  .name {
    margin-right: 10px;
  }
}

.course-inc {
  font-size: 1.2em;
  margin-bottom: 15px;
}

.button {
  margin-top: 15px;
}
</style>
