<template>
  <div>
    <a-row>
      <a-col>
        <a-form-model-item label="Название группы">
          <a-input v-model="group.group_name" />
        </a-form-model-item>

        <a-form-model-item label="Название чата">
          <a-input v-model="group.chat_name" />
        </a-form-model-item>
        <a-form-model-item>
          <a-row type="flex" :gutter="24" class="buttons__block">
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="primary" @click="edit"
                >Сохранить</a-button
              >
            </a-col>
            <a-col :span="24" :lg="12" :md="24">
              <a-button class="button" type="danger" @click="deleteGroup"
                >Удалить</a-button
              >
            </a-col>
          </a-row>
        </a-form-model-item>

        <a-form-model-item label="Учатники группы">
          <div class="table">
            <p>Имя</p>
            <p>Фамилия</p>
            <p>Email</p>
          </div>
          <div
            v-for="(student, index) in group.users"

            style="cursor: pointer"
            :key="index"
            class="student"
          >
            <div @click="openChatMemberPage(student)">
              <p>{{ student.firstname }}</p>
            </div>
            <div @click="openChatMemberPage(student)">
              <p>{{ student.lastname }}</p>
            </div>
            <div>
              <p>
                <a class="delete_student" @click="delete_student(student.id)">Удалить</a>
              </p>
            </div>
          </div>
        </a-form-model-item>

        <a-form-model-item label="Учатники группы">
          <a-select style="width: 100%" v-model="studentAddToGroupId">
            <a-select-option
              v-for="(student, index) in students"
              :value="student.id"
              :key="index"
            >
              {{ student.firstname }} {{ student.lastname }}
            </a-select-option>
          </a-select>
        </a-form-model-item>

        <a-button class="button" type="primary" @click="addToGroup"
          >Добавить в группу</a-button
        >
      </a-col>
    </a-row>
  </div>
</template>

<script>
import GroupsAPI from "../../../api/GroupsAPI";
import StudentsAPI from "../../../api/StudentsAPI";

export default {
  data() {
    return {
      group: null,
      students: [],
      studentAddToGroupId: null,
    };
  },
  mounted() {
    this.get();
    this.getStudents();
  },
  methods: {
    async get() {
      GroupsAPI.get(this.$route.params.id)
        .then((response) => {
          this.group = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    delete_student: function(id) {
      StudentsAPI.unsubscribe_group({
        chat: this.$route.params.id,
        user: id
      })
          .then((response) => {
            this.get();
          })
          .catch((e) => {
            console.log(e);
          });
      this.$root.$emit('reloadData');
    },
    edit() {
      GroupsAPI.edit(
        {
          name: this.group.chat_name,
          group_name: this.group.group_name,
        },
        this.$route.params.id
      )
        .then((response) => {
          this.group.chat_name = response.data.name;
          this.group.group_name = response.data.group_name;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteGroup() {
      GroupsAPI.delete(this.$route.params.id)
        .then((response) => {
          this.goTo('/groups/');
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
    addToGroup() {
      GroupsAPI.addToGroup(this.$route.params.id, this.studentAddToGroupId)
        .then((response) => {
          this.get();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    openChatMemberPage(student) {
      switch (student.role) {
        case "ST":
          this.goTo("/students/" + student.id);
          break;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.button {
  margin-top: 15px;
}

.student {
  height: 34px;
  align-items: center;
  display: flex;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid rgb(221, 221, 221);
  margin: -1px 0;

  &:hover {
    background-color: rgb(223, 239, 255);
  }

  &:hover p {
    color: #000;
  }

  div {
    width: calc(100% / 3);
    border-right: 1px solid rgb(221, 221, 221);

    &:last-child {
      border-right: none;
    }

    p {
      padding-left: 10px;
      line-height: 32px;
    }
  }
}

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
</style>
