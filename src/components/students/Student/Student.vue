<template>
  <div>
    <div class="student">
      <div @click="open_student(data.id)">
        <p>{{ data.firstname }}</p>
      </div>
      <div @click="open_student(data.id)">
        <p>{{ data.lastname }}</p>
      </div>
      <div @click="open_student(data.id)">
        <p>{{ data.email }}</p>
      </div>
      <div>
        <p>
          <a class="delete_student" @click="delete_student(data.id)">Удалить</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import StudentsAPI from '../../../../api/StudentsAPI';

export default {
  name: "student",
  props: ["data", "CourseId"],
  methods: {
    open_student: function(id) {
      this.goTo("/students/" + id);
    },
    delete_student: function(id) {
      StudentsAPI.unsubscribe_course({
        course: this.CourseId,
        user: id
      })
          .then((response) => {
          })
          .catch((e) => {
            console.log(e);
          });
      this.$root.$emit('reloadData');
    },
  },
};
</script>

<style scoped lang="scss">
.delete_student{
  padding: 3px 10px;
  background: red;
  color: #fff;
}
.student {
  display: flex;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: rgb(223, 239, 255);
  }

  &:hover p {
    color: #000;
  }
  div {
    width: calc(100% / 3);
    box-sizing: border-box;
    border-bottom: 1px solid rgb(221, 221, 221);
    border-right: 1px solid rgb(221, 221, 221);
    &:first-child {
      border-left: 1px solid rgb(221, 221, 221);
    }

    p {
      padding: 10px;
    }
  }
}
</style>
