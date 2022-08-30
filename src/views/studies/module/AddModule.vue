<template>
  <AddModule :courseId="courseId"></AddModule>
</template>
<script>
import AddModule from "../../../components/studies/modules/Module/AddModule.vue";
export default {
  data(){
    return {
      courseId: Number(this.$route.params.CourseId)
    }
  },
  mounted(){
  },
  components: {
    AddModule,
  },
};
</script>
