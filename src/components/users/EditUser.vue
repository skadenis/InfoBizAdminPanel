<template>
  <div>
    <div class="error" v-if="status.error">
      {{ status.text }}
    </div>
    <a-form-model-item label="Фамилия">
      <a-input v-model="user.lastname" />
    </a-form-model-item>
    <a-form-model-item label="Имя">
      <a-input v-model="user.firstname" />
    </a-form-model-item>
    <a-form-model-item label="Email">
      <p>{{user.email}}</p>
    </a-form-model-item>
    <a-form-model-item label="Сменить пароль">
      <a-input v-model="user.password" type="password" />
    </a-form-model-item>
    <a-form-model-item label="Повторите пароль">
      <a-input v-model="user.copy_password" type="password" />
    </a-form-model-item>
    <a-form-model-item>
      <a-row
          type="flex"
          :gutter="24"
          class="buttons__block add__groups-btn"
      >
        <a-col :span="24" :lg="12" :md="12">
          <a-button class="button" type="primary" @click="edit"
          >Сохранить изменеия</a-button
          >
        </a-col>
        <a-col :span="24" :lg="12" :md="12">
          <a-button  class="button" type="danger"  @click="deleteUser"
          >Удалить</a-button
          >
        </a-col>
      </a-row>
    </a-form-model-item>
  </div>
</template>

<script>
import UsersAPI from "../../../api/UsersAPI";

export default {
  data() {
    return {
      status: {
        error: false,
        text: ''
      },
      email_exists: false,
      user: {
        firstname: null,
        lastname: null,
        email: null,
        password: '',
        copy_password: '',
      },
    };
  },
  mounted() {
    this.get();
  },


  methods: {
    get: function () {
      UsersAPI.get(this.$route.params.id)
          .then((response) => {
            this.user = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deleteUser: function () {
      UsersAPI.delete(this.$route.params.id)
          .then((response) => {
            this.$router.push('/users/')
          })
          .catch((e) => {
            console.log(e);
          });
    },
    edit: function(){
      if(this.user.password === this.user.copy_password && (this.user.password).length > 9){
        this.status.error = false;
        let data = this.user;
        delete data.email;
        delete data.copy_password;
        data.group = 'US';

        UsersAPI.add(data)
            .then((response) => {
              if (response.data.id !== undefined){
                this.$router.push('/users/'+response.data.id);
              }else {
                this.status.error = true;
                this.status.text = 'Ошибка создания пользователя проверьте корректность введенных данных'
              }
            })
            .catch((e) => {
              console.log(e);
            });

      }else {
        this.status.error = true;
        this.status.text = 'Пароли не совпадают'
      }
    }
  }
}
</script>

<style scoped>
.error{
  margin: 15px 0;
  padding: 20px;
  background: #fdd6d6;
  color: red;
  font-weight: bold;
}
</style>