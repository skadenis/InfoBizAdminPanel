<template>
  <EditTest :testID="$route.params.id"/>
</template>
<script>
import EditTest from "../../components/tests/EditTest.vue";
export default {
  components: {
    EditTest,
  },
};
</script>
