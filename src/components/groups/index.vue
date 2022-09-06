<template>
  <div>
    <div>
      <button class="add-btn" @click="goTo('/groups/add')">
        Добавить группу
      </button>
    </div>
    <div class="table">
      <p>№</p>
      <p>Название группы</p>
      <p>Название чата</p>
      <p>Кол-во участников</p>
    </div>
    <chatRow
      v-for="(group, index) in groups"
      :index="index"
      :key="index"
      :data="group"
    />
  </div>
</template>

<script>
import chatRow from "@/components/groups/chatRow";
import GroupsAPI from "../../../api/GroupsAPI";

export default {
  data() {
    return {
      groups: [],
    };
  },
  components: {
    chatRow,
  },
  mounted() {
    this.getGroups();
  },
  methods: {
    getGroups() {
      GroupsAPI.get_all()
        .then((response) => {
          this.groups = response.data.chats;
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
  margin-top: 20px;

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
    width: 25%;
  }
}
</style>
