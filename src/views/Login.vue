<template>
  <div class="sign-in">
    <a-row
      type="flex"
      :gutter="[24, 24]"
      justify="space-around"
      align="middle"
      style="height: calc(100vh - 90px);"
    >
      <!-- Sign In Form Column -->
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 7, offset: 2 }"
        class="col-form"
      >
        <h2 class="mb-15">Войти</h2>
        <h6 class="font-regular text-muted info_text mb-15">
          Введите свой логин и пароль чтобы авторизироваться в системе
        </h6>

        <a-alert
          v-if="authErrorText !== null"
          :message="authErrorText"
          type="error"
          class="alert_warning_auth_status"
        />
        <!-- Sign In Form -->
        <a-form
          id="components-form-demo-normal-login"
          class="login-form"
          @submit="auth"
          :hideRequiredMark="true"
        >
          <a-form-item class="mb-10" label="Логин" :colon="false">
            <a-input
              v-model="login"
              v-decorator="[
                'login',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Пожалуйста введите свой логин!',
                    },
                  ],
                },
              ]"
              placeholder="Логин"
            />
          </a-form-item>
          <a-form-item class="mb-5" label="Пароль" :colon="false">
            <a-input
              v-model="password"
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Пожалуйста введите свой пароль!',
                    },
                  ],
                },
              ]"
              type="password"
              placeholder="Пароль"
            />
          </a-form-item>

          <a-form-item>
            <a-button
              type="primary"
              block
              html-type="submit"
              class="login-form-button"
            >
              Войти
            </a-button>
          </a-form-item>

          <div class="help_buttons">
            <!-- <div class="guest_enter" @click="enterLikeGuest">
              Войти как гость
            </div> -->
            <div
              class="remind_my_password"
              @click="$router.push({ name: 'RestorePassword' })"
            >
              Восстановить пароль
            </div>
          </div>
        </a-form>
        <!-- / Sign In Form -->
      </a-col>
      <!-- / Sign In Form Column -->

      <!-- Sign In Image Column -->
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img">
        <!--        <img src="images/img-signin.jpg" alt="">-->
      </a-col>
      <!-- Sign In Image Column -->
    </a-row>
  </div>
</template>

<script>
// import UserApi from "../../api/UserApi";
// import BaseAPI from "../../api/BaseApi";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      login: "",
      password: "",
      authStatus: null,
      authErrorText: null,
    };
  },
  computed: {
    ...mapGetters({
      // getUserAuthStatus: "User/getUserAuthStatus",
    }),
  },
  watch: {
    // getUserAuthStatus: {
    //   handler(val) {
    //     if (val === true) {
    //       this.$router.push({ name: "Главная" });
    //     }
    //   },
    //   immediate: true,
    // },
  },

  methods: {
    ...mapActions({
      setAuthToken: "User/setAuthToken",
    }),
    // enterLikeGuest() {
    //   this.login = "skadenis@mail.ru";
    //   this.password = "123";

    //   setTimeout(
    //     function() {
    //       this.makeAuth();
    //     }.bind(this),
    //     750
    //   );
    // },
    makeAuth() {
      UserApi.authUser({
        login: this.login,
        password: this.password,
      })
        .then((response) => {
          response.status === 401 ? this.$store.commit("User/EXIT_USER") : null;
          switch (response.data.status) {
            case 404:
              this.authStatus = 404;
              this.authErrorText =
                "Возможно вы ввели не верный логин или пароль";
              break;
            case 200:
              this.setAuthToken(response.data.token);
              this.authStatus = null;
              this.authErrorText = null;
              break;
            default:
              this.authStatus = 404;
              this.authErrorText =
                "Возможно вы ввели не верный логин или пароль";
              break;
          }
        })
        .catch(() => {})
        .finally(() => {
          if (this.authStatus === null) {
            this.$router.push({ name: "home" });
            UserApi.refreshData();
          }
        });
    },
    auth(e) {
      e.preventDefault();
      this.makeAuth();
    },
  },
};
</script>

<style lang="scss" scoped>
.alert_warning_auth_status {
  margin-top: 15px;
}
.login_form {
  max-width: 400px;
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 10px;

  & > div {
    margin: 10px 0 0 0;
    display: flex;
    flex-direction: column;

    &.authErrors {
      background: red;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      padding: 20px;
    }

    & label {
      font-size: 12px;
      text-align: left;
      margin-bottom: 5px;
    }

    & input {
      height: 35px;
      border: 1px solid #c9c9c9;
    }

    & button {
      height: 35px;
      font-size: 16px;
      font-weight: bold;
      background: #c9c9c9;
      cursor: pointer;
      border: none;
      &:hover {
        background: #a5a5a5;
      }
    }
  }
}

.help_buttons {
  display: flex;
  & * {
    flex: 1;
    color: #808080;
    margin: 15px 0 25px 0;
    cursor: pointer;
    &:hover {
      color: #1890ff;
      text-decoration: underline;
    }
  }
  & .guest_enter {
  }

  & .remind_my_password {
    text-align: left;
  }
}
.info_text {
  margin-bottom: 15px;
}
.ant-alert-error {
  margin-bottom: 10px;
}
</style>
