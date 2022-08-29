<template>
  <EditCourse :courseId="courseId"></EditCourse>
</template>
<script>
import EditCourse from "../../../../components/studies/courses/Course/EditCourse.vue";
export default {
  data() {
    return {
      courseId: Number(this.$route.params.CourseId),
    };
  },
  components: {
    EditCourse,
  },
};
</script>
