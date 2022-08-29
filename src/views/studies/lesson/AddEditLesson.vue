<template>
  <AddEditLesson
    :courseId="courseId"
    :moduleId="moduleId"
    :lessonId="lessonId"
  ></AddEditLesson>
</template>
<script>
import AddEditLesson from "../../../components/studies/lessons/Lesson/AddEditLesson.vue";
export default {
  data() {
    return {
      courseId: Number(this.$route.params.CourseId),
      moduleId: Number(this.$route.params.ModuleId),
      lessonId: Number(this.$route.params.LessonId),
    };
  },
  components: {
    AddEditLesson,
  },
};
</script>
