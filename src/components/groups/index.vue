<template>
  <div>
    <div>
      <button class="add__courses-btn" @click="goTo('/groups/add')">
        Добавить группу
      </button>
    </div>
    <div class="table__head">
      <div>
        <p>№</p>
      </div>
      <div>
        <p>Название группы</p>
      </div>
      <div>
        <p>Название чата</p>
      </div>
      <div>
        <p>Кол-во участников</p>
      </div>
    </div>

    <chatRow v-for="(group, index) in groups" :index="index" :key="index" :data="group" />

  </div>
</template>

<script>
import chatRow from "@/components/groups/chatRow"
import GroupsAPI from "../../../api/GroupsAPI";

export default {
  data(){
    return {
      groups: []
    }
  },
  components: {
    chatRow
  },
  mounted() {
    this.getGroups();
  },
  methods: {
    getGroups(){
      GroupsAPI.get_all()
          .then((response) => {
            this.groups = response.data.chats;
          })
          .catch((e) => {
            console.log(e);
          });
    }
  }
}
</script>

<style scoped lang="scss">
.table__head {
  display: flex;
  background-color: rgb(221, 221, 221);

  div {
    width: 33.333333%;
    border-right: 1px solid #fff;

    &:last-child {
      border-right: none;
    }
  }

  p {
    padding: 10px;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
}
.add__courses-btn {
  width: 20%;
  min-width: 105px;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8em;
}
</style>