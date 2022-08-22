<!--
	This is the default layout, used in sign-in and sign-up pages.
 -->

<template>
  <div>
    <!-- Default Layout -->
    <a-layout class="layout-default" id="layout-default" :class="[layoutClass]">
      <!-- Page Content -->
      <a-layout-content>
        <router-view />
      </a-layout-content>
      <!-- / Page Content -->

      <a-row type="flex">
        <a-col :span="24" :md="12" class="footer-control">
          <!-- Footer Navigation Menu -->
          <!-- <a-menu mode="horizontal">
            <a-menu-item @click="$router.push('/legal')">Юридическая информация</a-menu-item>
          </a-menu> -->
          <!-- / Footer Navigation Menu -->
        </a-col>
      </a-row>
    </a-layout>
    <!-- / Default Layout -->
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    // Sets layout's element's class based on route's meta data.
    layoutClass() {
      return this.$route.meta.layoutClass;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
.layout-default {
  min-height: 100vh;
}
</style>
