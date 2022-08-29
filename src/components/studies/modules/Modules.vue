<template>
  <div>
    <button class="add__modules-btn">Добавить модуль</button>
    <!-- <div class="table__head">
      <div>
        <p>Название модуля</p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </div> -->
    <Module
      v-for="(module, mIndex) in modules"
      v-bind:data="module"
      v-bind:courseId="courseId"
      :key="mIndex"
    ></Module>
  </div>
</template>

<script>
import Module from "./Module/Module.vue";

export default {
  props: ["data", "courseId"],
  components: {
    Module,
  },
  data() {
    return {
      modules: null,
    };
  },
  mounted() {
    this.getModules();
  },

  methods: {
    getModules: function() {
      this.modules = this.data[this.courseId].modules;
    },
  },
};
</script>

<style scoped lang="scss">
// .table__head {
//   display: flex;
//   background-color: rgb(221, 221, 221);

//   div {
//     width: 20%;
//     border-right: 1px solid #fff;

//     &:last-child {
//       border-right: none;
//     }
//   }

//   p {
//     padding: 10px;
//     font-weight: 600;
//     color: #000;
//     text-align: center;
//   }
// }
.add__modules-btn {
  width: 20%;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8em;
}
</style>
