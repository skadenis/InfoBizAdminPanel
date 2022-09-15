<template>
  <div>
    <div>
      <button class="add__offer-btn" @click="addUser()">
        Добавить пользователя
      </button>
    </div>
    <div>
      <div class="table">
        <p>Имя</p>
        <p>Фамилия</p>
        <p>Email</p>
      </div>
      <User
          v-for="(student, sIndex) in users"
          v-bind:data="student"
          :key="sIndex"
          :show-delete="false"
      ></User>
    </div>
  </div>

</template>

<script>
import User from "./User";
import UsersAPI from "../../../api/UsersAPI";

export default {
  components: {
    User,
  },
  data() {
    return {
      users: null,
    };
  },

  mounted() {
    this.getStudents();
  },

  methods: {
    addUser: function (){
      this.$router.push('/users/add');
    },
    getStudents: function() {
      UsersAPI.get_all()
          .then((response) => {
            this.users = response.data.users;
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  display: flex;
  width: 100%;

  p {
    box-sizing: border-box;

    font-weight: 600;
    color: #000;

    border-right: 1px solid #eee;
    white-space: nowrap;

    text-align: center;

    background: #ddd;
    padding: 10px 0;
    line-height: 14px;
    width: calc(100% / 3);
  }
}
.add__offer-btn {
  width: 20%;
  min-width: 125px;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8em;
}
</style>
