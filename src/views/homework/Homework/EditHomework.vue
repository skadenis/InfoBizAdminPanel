<template>
  <EditHomework :homeworkId="studentId"></EditHomework>
</template>
<script>
import EditHomework from "../../../components/homeworks/Homework/EditHomework.vue";
export default {
  data() {
    return {
      homeworkId: Number(this.$route.params.HomeworkId),
    };
  },
  components: {
    EditHomework,
  },
};
</script>
