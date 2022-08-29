<template>
  <AddEditCourse :courseId="courseId"></AddEditCourse>
</template>
<script>
import AddEditCourse from "../../../../components/studies/courses/Course/AddEditCourse.vue";
export default {
  data() {
    return {
      courseId: Number(this.$route.params.CourseId),
    };
  },
  components: {
    AddEditCourse,
  },
};
</script>
