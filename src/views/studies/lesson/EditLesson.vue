<template>
  <EditLesson
    :courseId="courseId"
    :moduleId="moduleId"
    :lessonId="lessonId"
  ></EditLesson>
</template>
<script>
import EditLesson from "../../../components/studies/lessons/Lesson/EditLesson.vue";
export default {
  data() {
    return {
      courseId: Number(this.$route.params.CourseId),
      moduleId: Number(this.$route.params.ModuleId),
      lessonId: Number(this.$route.params.LessonId),
    };
  },
  components: {
    EditLesson,
  },
};
</script>
