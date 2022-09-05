<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  computed: {
    // Sets components name based on current route's specified layout, defaults to
    // <layout-default></layout-default> component.
    layout() {
      return "layout-" + (this.$route.meta.layout || "default").toLowerCase();
    },
  },
};
</script>

<style lang="scss">
@import "assets/scss/reset";

.file-info {
  font-size: 0.8rem;
}

.add-btn {
  width: 20%;
  min-width: 125px;
  height: auto;
  background-color: hsl(209, 100%, 55%);
  color: #fff;
  line-height: 40px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8rem;
}

.buttons__block {
  width: 100%;
  margin-bottom: 20px;

  .button {
    width: 100%;
    color: #fff;
  }
}
</style>
