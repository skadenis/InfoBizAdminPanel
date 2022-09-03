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
          <a-col :span="24" :lg="12" :md="24">
            <a-button class="button" type="primary" @click="edit">Сохранить</a-button>
          </a-col>
          <a-col :span="24" :lg="12" :md="24">
            <a-button class="button" type="danger" @click="deleteGroup">Удалить</a-button>
          </a-col>
        </a-row>

        <a-form-model-item label="Учатники группы">
          <ul>
            <li v-for="(student, index) in group.users" @click="goTo('/students/'+student.id)" style="cursor: pointer">{{student.firstname}} {{student.lastname}}</li>
          </ul>
        </a-form-model-item>

        <a-form-model-item label="Учатники группы">
          <a-select style="width: 100%" v-model="studentAddToGroupId">
            <a-select-option v-for="(student, index) in students" :value="student.id" :key="index" >
              {{student.firstname}} {{student.lastname}}
            </a-select-option>
          </a-select>
        </a-form-model-item>

        <a-button class="button" type="primary" @click="addToGroup">Добавить в группу</a-button>



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
      group: null,
      students: [],
      studentAddToGroupId: null
    }
  },
  mounted() {
    this.get();
    this.getStudents()
  },
  methods: {
    async get(){
        GroupsAPI.get(this.$route.params.id)
            .then((response) => {
              this.group = response.data;
            })
            .catch((e) => {
              console.log(e);
            });
    },
    edit(){
      GroupsAPI.edit()
          .then((response) => {
            this.group = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    deleteGroup(){
      GroupsAPI.delete(this.$route.params.id)
          .then((response) => {
            this.group = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    getStudents: function() {
      StudentsAPI.get_all()
          .then((response) => {
            this.students = response.data;
          })
          .catch((e) => {
            console.log(e);
          });
    },
    addToGroup(){
      GroupsAPI.addToGroup(this.$route.params.id, this.studentAddToGroupId)
          .then((response) => {
              this.get();
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