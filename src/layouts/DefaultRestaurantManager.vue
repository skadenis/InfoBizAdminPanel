<!--
	This is the dashboard layout, used in dashboard, tables, billing and profile pages.
 -->

<template>
  <div>
    <div class="testAccountInfo" v-if="partner_id === 1">
      <div class="container">
        Это тестовый личный кабинет, где все изменения автоматически отменяются
        каждые 15 минут. Экспериментируй! Вперёд!
      </div>
    </div>

    <!-- Dashboard Layout -->
    <a-layout
      class="layout-dashboard"
      id="layout-dashboard"
      :class="[
        navbarFixed ? 'navbar-fixed' : '',
        partner_id === 1 ? 'marginTop50' : '',
        !sidebarCollapsed ? 'has-sidebar' : '',
        layoutClass,
      ]"
    >
      <!-- Main Sidebar -->
      <!-- <DashboardSidebar
          :sidebarCollapsed="sidebarCollapsed"
          :sidebarColor="sidebarColor"
          :sidebarTheme="sidebarTheme"
          @toggleSidebar="toggleSidebar"
      ></DashboardSidebar> -->
      <!-- / Main Sidebar -->

      <!-- Layout Content -->
      <a-layout>
        <!-- Layout Header's Conditionally Fixed Wrapper -->
        <DashboardHeader
          :sidebarCollapsed="sidebarCollapsed"
          :navbarFixed="navbarFixed"
          @toggleSidebar="toggleSidebar"
        ></DashboardHeader>
        <!-- / Layout Header's Conditionally Fixed Wrapper -->

        <!-- Page Content -->
        <a-layout-content>
          <router-view />
        </a-layout-content>
        <!-- / Page Content -->
        <operation></operation>

        <!-- Layout Footer -->
        <DashboardFooter></DashboardFooter>
        <!-- / Layout Footer -->

        <!-- Sidebar Overlay -->
        <div
          class="sidebar-overlay"
          @click="sidebarCollapsed = true"
          v-show="!sidebarCollapsed"
        ></div>
        <!-- / Sidebar Overlay -->
      </a-layout>
      <!-- / Layout Content -->
    </a-layout>
    <!-- / Dashboard Layout -->
  </div>
</template>

<script>
// import DashboardSidebar from "../components/Sidebars/DashboardSidebar";
import DashboardHeader from "../components/Headers/DashboardHeader";
import DashboardFooter from "../components/Footers/Footer";
import operation from "@/components/elements/success_operation";
import { mapActions, mapGetters } from "vuex";
import Cookie from "js-cookie";

export default {
  components: {
    // DashboardSidebar,
    DashboardHeader,
    DashboardFooter,
    operation,
  },
  data() {
    return {
      // Sidebar collapsed status.
      sidebarCollapsed: false,
      partner_id: null,

      // Main sidebar color.
      sidebarColor: "primary",

      // Main sidebar theme : light, white, dark.
      sidebarTheme: "light",

      // Header fixed status.
      navbarFixed: false,

      // Settings drawer visiblility status.
      showSettingsDrawer: false,
      authInfo: {},
    };
  },
  watch: {
    // getUserAuthStatus: {
    //   handler(val) {
    //     if (val === false) {
    //       this.$router.push({ path: "/login" });
    //     }
    //   },
    //   immediate: true,
    // },
  },
  methods: {
    ...mapActions({
      exit: "User/exit",
    }),
    toggleSidebar(value) {
      this.sidebarCollapsed = value;
    },
    updateSidebarTheme(value) {
      this.sidebarTheme = value;
    },
  },
  beforeCreate() {
    let Cookies = Cookie.get();
    if (Cookies.token === undefined) {
      this.$store.commit("User/EXIT_USER");
    }
  },
  created() {
    this.AuthInfo = this.$store.getters["User/getUserInfo"];
    if (this.AuthInfo.type !== 1) {
      this.exit();
    }
    this.partner_id = this.$store.getters["User/getUserInfo"].partner_id;
  },

  computed: {
    ...mapGetters({
      // getUserAuthStatus: "User/getUserAuthStatus",
      getUserInfo: "User/getUserInfo",
    }),
    // Sets layout's element's class based on route's meta data.
    layoutClass() {
      return this.$route.meta.layoutClass;
    },
  },
};
</script>

<style lang="scss">
.testAccountInfo {
  background: rgb(5, 165, 69);
  color: #fff;
  padding: 0 5px;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 9999;
  & .container {
    width: 100%;
    font-size: 14px;
    padding: 8px 12px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 960px) {
    & .container {
      max-width: 900px;
    }
  }
  @media (min-width: 1264px) {
    & .container {
      max-width: 1185px;
    }
  }
  @media (min-width: 1904px) {
    & .container {
      max-width: 1785px;
    }
  }
}
.marginTop50 {
  margin-top: 30px;
  @media screen and (max-width: 791px) {
    & {
      margin-top: 44px;
    }
  }
}
</style>
