<template>
  <div class="sign-in">

    <a-row type="flex" :gutter="[24,24]" justify="space-around" align="middle" style="height: calc(100vh - 100px);">
      <a-col :span="24" :md="12" :lg="{span: 12, offset: 0}" :xl="{span: 6, offset: 2}" class="col-form">
        <button type="button" class="ant-btn mb-25" @click="$router.push({name: 'RestorePassword'})"><span>Назад</span></button>
        <h2 class="mb-15">Восстановление пароля</h2>
        <p class="font-regular text-muted info_text mb-15">Новый пароль отправлен на адрес skadenis123@gmail.com</p>
        <a-form
            id="components-form-demo-normal-login"
            class="login-form"
            @submit="restorePassword"
            :hideRequiredMark="true"
        >
          <a-form-item>
            <a-button type="primary" block html-type="submit" class="login-form-button">
              Войти
            </a-button>
          </a-form-item>
        </a-form>
      </a-col>
      <a-col :span="24" :md="12" :lg="12" :xl="12" class="col-img"></a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  methods: {
    restorePassword: function (){
      this.$router.push({name: 'Login'});
    }
  }
}
</script>

<style scoped>

</style>