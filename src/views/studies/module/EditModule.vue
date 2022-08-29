<template>
  <EditModules :courseId="courseId" :moduleId="moduleId"></EditModules>
</template>
<script>
import EditModules from "../../../components/studies/modules/Module/EditModule.vue";
export default {
  data() {
    return {
      courseId: Number(this.$route.params.CourseId),
      moduleId: Number(this.$route.params.ModuleId),
    };
  },
  components: {
    EditModules,
  },
};
</script>
