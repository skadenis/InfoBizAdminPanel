<template>
  <div>
    <EditCourse :courseId="courseId"></EditCourse>
    <StudentsInCourse :courseId="courseId"></StudentsInCourse>
  </div>
</template>

<script>
import EditCourse from "../../../../components/studies/courses/Course/EditCourse.vue";
import StudentsInCourse from "../../../../components/studies/courses/Course/StudentsInCourse"
  ;
export default {
  data() {
    return {
      courseId: Number(this.$route.params.CourseId),
    };
  },
  components: {
    EditCourse,
    StudentsInCourse
  },
};
</script>
