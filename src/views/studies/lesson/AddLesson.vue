<template>
  <AddLesson :courseId="courseId" :moduleId="moduleId"></AddLesson>
</template>
<script>
import AddLesson from "../../../components/studies/lessons/Lesson/AddLesson.vue";
export default {
  data() {
    return {
      courseId: Number(this.$route.params.CourseId),
      moduleId: Number(this.$route.params.ModuleId),
    };
  },
  components: {
    AddLesson,
  },
};
</script>
