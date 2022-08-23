import Vue from "vue";
import VueGtm from "vue-gtm";
import Antd from "ant-design-vue";
import VueScrollTo from "vue-scrollto";

import "ant-design-vue/dist/antd.css";
import App from "./App.vue";

import LoginLayout from "./layouts/Login";
import DefaultLayout from "./layouts/Default";
import noAuthPages from "./layouts/noAuthPages";

import "./registerServiceWorker";
import { gtm } from "./config";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";

import FormatterMixin from "@/mixins/formatter";

import "./scss/app.scss";

Vue.use(Antd);

Vue.use(VueScrollTo);
Vue.use(VueGtm, {
  id: gtm.id, // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryPararms: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}]
  defer: gtm.defer, // defaults to false. Script can be set to `defer` to increase page-load-time at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible)
  enabled: gtm.enabled, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: gtm.debug, // Whether or not display console logs debugs (optional)
  loadScript: gtm.loadScript, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: gtm.ignoredViews, // Don't trigger events for specified router names (case insensitive) (optional)
  trackOnNextTick: gtm.trackOnNextTick, // Whether or not call trackView in Vue.nextTick
});

Vue.mixin(FormatterMixin);

// Vue.filter("formatDate", formatDate);
// Vue.filter("trueFalse", trueFalse);
// Vue.filter("paymentMethodFormatter", paymentMethodFormatter);
// Vue.filter("orderStatusName", orderStatusName);
// Vue.filter("promocodeType", promocodeType);

// Vue.config.productionTip = false
// Vue.config.devtools = false

// Adding template layouts to the vue components.
Vue.component("layout-default", DefaultLayout);

Vue.component("layout-no-auth-pages", noAuthPages);
Vue.component("layout-login", LoginLayout);

router.beforeEach((to, from, next) => {
  document.title = to.meta.name + " - AdminPanel";
  next();
});

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
