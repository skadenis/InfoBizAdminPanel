<template>
  <div class="sign-in">
    <a-row
      type="flex"
      :gutter="[24, 24]"
      justify="space-around"
      align="middle"
      style="height: calc(100vh - 100px);"
    >
      <a-col
        :span="24"
        :md="12"
        :lg="{ span: 12, offset: 0 }"
        :xl="{ span: 6, offset: 2 }"
        class="col-form"
      >
        <button
          type="button"
          class="ant-btn mb-25"
          @click="$router.push({ name: 'Login' })"
        >
          <span>Назад</span>
        </button>
        <h2 class="mb-15">Восстановление пароля</h2>
        <h6 class="font-regular text-muted info_text mb-15">
          Введите свой адрес электронной почты для восстановления пароля
        </h6>

        <a-form-item class="mb-10" label="Email">
          <a-input placeholder="Email" v-model="email" />
        </a-form-item>

        <a-form-item>
          <a-button
            type="primary"
            block
            html-type="submit"
            class="login-form-button"
            @click="restorePassword"
          >
            Восстановить пароль
          </a-button>
        </a-form-item>
      </a-col>
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img"></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    // restorePassword: function (){
    //   UserApi.restorePassword(this.email)
    //       .then(response => {
    //         switch (response.data.status){
    //           case 404:
    //             // this.authStatus = 404;
    //             // this.authErrorText = 'Возможно вы ввели не верный логин или пароль';
    //             break;
    //           case 200:
    //             this.$router.push({name: 'RestorePasswordStep1', query: {email: this.email}});
    //             break;
    //         }
    //       })
    //       .catch(() => {});
    // }
  },
};
</script>

<style scoped></style>
