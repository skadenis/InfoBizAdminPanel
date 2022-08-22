<template>
  <a-breadcrumb >
    <a-breadcrumb-item><router-link to="/">{{ TextLocalization.Home[language] }}</router-link></a-breadcrumb-item>
    <a-breadcrumb-item v-if="this.$route.name !== TextLocalization.Home[language]">{{ this.$route.meta.name }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  mounted() {
    // console.log(this.$router);
    console.log(this.$route);
  }
}
</script>

<style scoped>

</style>