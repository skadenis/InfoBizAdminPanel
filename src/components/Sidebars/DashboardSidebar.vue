<template>

	<!-- Main Sidebar -->
	<a-layout-sider
      collapsible
      class="sider-primary"
      breakpoint="lg"
      collapsed-width="0"
      width="250px"
      :collapsed="sidebarCollapsed"
      @collapse="$emit('toggleSidebar', ! sidebarCollapsed)"
      :trigger="null"
      :class="['ant-layout-sider-' + sidebarColor, 'ant-layout-sider-' + sidebarTheme]"
      theme="light"
      :style="{ backgroundColor: 'transparent',}">
			<div class="brand">
        <router-link to="/">
          <img src="@/assets/logo.svg" width="100%">
        </router-link>
      </div>
			<hr>

			<!-- Sidebar Navigation Menu -->
			<a-menu theme="light" mode="inline">

        <a-menu-item>
          <router-link to="/applications">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>
								<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>
								<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>
							</svg>
						</span>
            <span class="label">Курсы</span>
          </router-link>
        </a-menu-item>

        <a-menu-item>
          <router-link to="/students">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>
								<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>
								<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>
							</svg>
						</span>
            <span class="label">Студенты</span>
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/applications">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>
								<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>
								<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>
							</svg>
						</span>
            <span class="label">Календарь</span>
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/applications">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>
								<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>
								<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>
							</svg>
						</span>
            <span class="label">Маркетинг</span>
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <a v-on:click="exit()">
						<span class="icon">
							<a-icon type="close-circle" />
						</span>
            <span class="label">Выйти</span>
          </a>
        </a-menu-item>
      </a-menu>


			<!-- Sidebar Footer -->
			<div class="aside-footer">
				<div class="footer-box">
					<h6>Возникли вопросы?</h6>
					<p>Звоните, мы поможем!</p>

          <p><br><b>ID партнера: </b></p>
					<a-button type="primary" href="/contacts" block target="_blank" style="">
						Контакты
					</a-button>
				</div>
			</div>


<!--			 / Sidebar Footer -->

	</a-layout-sider>
	<!-- / Main Sidebar -->

</template>

<script>

import {mapActions, mapGetters} from "vuex";

  export default ({
		props: {
			// Sidebar collapsed status.
			sidebarCollapsed: {
				type: Boolean,
				default: false,
			},

			// Main sidebar color.
			sidebarColor: {
				type: String,
				default: "primary",
			},

			// Main sidebar theme : light, white, dark.
			sidebarTheme: {
				type: String,
				default: "light",
			},
		},
    methods: {
      ...mapActions({
        userExit: 'User/exit',
      }),
      exit: function () {
        this.userExit();
      },
      openPage(page){
        this.$router.push(page);
      }
    }
	})

</script>

<style lang="scss">
.icon{
  & i{
    margin: 0!important;
    font-size: 18px!important;
  }
}
.footer-box .ant-btn-primary span{
  color: #141414;
}
</style>
