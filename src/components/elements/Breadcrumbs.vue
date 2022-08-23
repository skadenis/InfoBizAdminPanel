<template>
  <a-breadcrumb>
    <a-breadcrumb-item
      ><router-link to="/">Главная</router-link></a-breadcrumb-item
    >
    <a-breadcrumb-item v-if="this.$route.name !== 'Главная'">{{
      this.$route.meta.name
    }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$router);
    console.log(this.$route);
  },
};
</script>

<style scoped></style>
