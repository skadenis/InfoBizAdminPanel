<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название группы">
          <a-input v-model="group.group_name" readonly="true" />
        </a-form-model-item>

        <a-form-model-item label="Название чата">
          <a-input v-model="group.chat_name" readonly="true" />
        </a-form-model-item>

        <a-row type="flex" :gutter="24" class="bottom-buttons">
          <a-col :span="24" :lg="24" :md="24">
            <a-button class="button" type="primary" @click="add">Добавить</a-button>
          </a-col>
        </a-row>

      </a-col>
    </a-row>
  </div>
</template>

<script>
import GroupsAPI from "../../../api/GroupsAPI";
import StudentsAPI from "../../../api/StudentsAPI";

export default {
  data(){
    return {
      group: {
        group_name: "",
        chat_name: ""
      },
    }
  },
  methods: {
    add(){
      GroupsAPI.add(this.group)
          .then((response) => {
            this.$root.$emit("createAlertGood");
            this.goTo("/groups/" + response.data.id);
          })
          .catch((e) => {
            console.log(e);
          });
    }
  }
}
</script>

<style scoped>

</style>