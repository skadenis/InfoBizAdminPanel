<!--
	This is the dashboard layout, used in dashboard, tables, billing and profile pages.
 -->

<template>
  <div>
    <a-layout
      class="layout-dashboard no-auth-page-layout-dashboard"
      id="layout-dashboard"
    >
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
        <!-- <operation></operation> -->

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
// import DashboardSidebar from '../components/Sidebars/DashboardSidebar' ;
import DashboardHeader from "../components/Headers/DashboardHeader";
import DashboardFooter from "../components/Footers/Footer";
import { mapActions } from "vuex";
// import operation from "@/components/elements/success_operation";

export default {
  components: {
    // DashboardSidebar,
    DashboardHeader,
    DashboardFooter,
    // operation,
  },
  data() {
    return {
      // Sidebar collapsed status.
      sidebarCollapsed: false,
      // Main sidebar color.
      sidebarColor: "primary",
      // Main sidebar theme : light, white, dark.
      sidebarTheme: "light",
      // Header fixed status.
      navbarFixed: false,
      // Settings drawer visiblility status.
      showSettingsDrawer: false,
    };
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
  computed: {
    layoutClass() {
      return this.$route.meta.layoutClass;
    },
  },
};
</script>

<style lang="scss">
.no-auth-page-layout-dashboard .ant-layout {
  margin-left: 0 !important;
}
.testAccountInfo {
  background: rgb(5, 165, 69);
  color: #fff;
  padding: 5px;
  font-weight: bold;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 9999;
  & .container {
    width: 100%;
    padding: 12px;
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
  margin-top: 50px;
}
</style>
