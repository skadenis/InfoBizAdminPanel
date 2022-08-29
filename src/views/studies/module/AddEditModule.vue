<template>
  <AddEditModules :courseId="courseId" :moduleId="moduleId"></AddEditModules>
</template>
<script>
import AddEditModules from "../../../components/studies/modules/Module/AddEditModule.vue";
export default {
  data() {
    return {
      courseId: Number(this.$route.params.CourseId),
      moduleId: Number(this.$route.params.ModuleId),
    };
  },
  components: {
    AddEditModules,
  },
};
</script>
