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

        <a-menu-item v-if="user_info.type === 0">
          <router-link to="/applications">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>
								<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>
								<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>
							</svg>
						</span>
            <span class="label">{{ TextLocalization.Applications[language] }}</span>
          </router-link>
        </a-menu-item>


        <a-menu-item v-if="user_info.type === 0">
          <router-link to="/development">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4Z" fill="#111827"/>
								<path d="M3 10C3 9.44771 3.44772 9 4 9H10C10.5523 9 11 9.44771 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10Z" fill="#111827"/>
								<path d="M14 9C13.4477 9 13 9.44771 13 10V16C13 16.5523 13.4477 17 14 17H16C16.5523 17 17 16.5523 17 16V10C17 9.44771 16.5523 9 16 9H14Z" fill="#111827"/>
							</svg>
						</span>
            <span class="label">Разработка</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="user_info.type === 0">
          <router-link to="/bookkeeping">
						<span class="icon">
							<a-icon type="book" />
						</span>
            <span class="label">{{ TextLocalization.Bookkeeping[language] }}</span>
          </router-link>
        </a-menu-item>
        <a-menu-item v-if="user_info.type === 1">
          <router-link to="/menu">
						<span class="icon">
							<a-icon type="rest" />
						</span>
            <span class="label">{{ TextLocalization.Menu[language] }}</span>
          </router-link>
        </a-menu-item>

        <a-menu-item>
          <router-link to="/marketing">
						<span class="icon">
							<a-icon type="percentage" />
						</span>
            <span class="label">{{ TextLocalization.Marketing[language] }}</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="user_info.type === 1">
          <router-link to="/orders">
						<span class="icon">
							<a-icon type="appstore" />
						</span>
            <span class="label">{{ TextLocalization.Orders[language] }}</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="user_info.type === 1">
          <router-link to="/clients">
						<span class="icon">
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z" fill="#111827"/>
							</svg>
						</span>
            <span class="label">Клиенты</span>
          </router-link>
        </a-menu-item>



        <a-menu-item v-if="user_info.type === 0">
          <router-link to="/users">
						<span class="icon">
							<a-icon type="user" />
						</span>
            <span class="label">{{ TextLocalization.Users[language] }}</span>
          </router-link>
        </a-menu-item>

        <a-menu-item v-if="user_info.type === 1">
          <router-link to="/settings">
						<span class="icon">
							<a-icon type="setting" />
						</span>
            <span class="label">{{ TextLocalization.Settings[language] }} </span>
          </router-link>
        </a-menu-item>





        <a-menu-item v-if="user_info.type === 1">
          <router-link to="/billing">
						<span class="icon">
							<a-icon type="bank" />
						</span>
            <span class="label">{{ TextLocalization.Payments[language] }}</span>
          </router-link>
        </a-menu-item>
        <a-menu-item>
          <a v-on:click="exit()">
						<span class="icon">
							<a-icon type="close-circle" />
						</span>
            <span class="label">{{ TextLocalization.Exit[language] }}</span>
          </a>
        </a-menu-item>
			</a-menu>
			<!-- / Sidebar Navigation Menu -->

			<!-- Sidebar Footer -->
			<div class="aside-footer" v-if="user_info.type === 1">
				<div class="footer-box">
					<h6>Возникли вопросы?</h6>
					<p>Звоните, мы поможем!</p>

          <p><br><b>ID партнера: {{ user_info.partner_id }}</b></p>
					<a-button type="primary" href="/contacts" block target="_blank" style="">
						Контакты
					</a-button>
				</div>
			</div>

    <div class="aside-footer" v-if="user_info.type === 0">
      <div class="footer-box">
        <h6>{{ user_info.surname }} {{ user_info.name }} {{ user_info.lastname }}</h6>
        <p>{{ user_info.position }}</p>


      </div>
    </div>
<!--			 / Sidebar Footer -->

    <div>
      <a-menu mode="vertical" style="border: 0px;">
        <a-menu-item @click="openPage('/legal')">Юридическая информация</a-menu-item>

      </a-menu>
    </div>

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
		data() {
			return {
        user_info: {}
			}
		},
    mounted() {
      this.user_info = (this.$store.getters["User/getUserInfo"]);
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
