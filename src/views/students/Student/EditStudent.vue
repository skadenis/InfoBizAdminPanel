<template>
  <EditStudent :studentId="studentId"></EditStudent>
</template>
<script>
import EditStudent from "../../../components/students/Student/EditStudent.vue";
export default {
  data() {
    return {
      studentId: Number(this.$route.params.StudentId),
    };
  },
  components: {
    EditStudent,
  },
};
</script>
