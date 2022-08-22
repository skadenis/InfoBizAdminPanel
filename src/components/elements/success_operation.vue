<script src="../../functions/generatePassword.js"></script>
<template>
  <div class="growl">
    <div class="growl__item  growl__item--shown" :class="operation.status === 'ok' ? 'growl__item--success' : 'growl__item--error'" v-for="(operation, key) in operations" @click="delete_mark(operation.id)" :key="key">
      <i :class="operation.status === 'ok' ? 'growl__ico__success' : 'growl__ico__error'"></i>
      <div class="growl__text">{{operation.text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "operation",
  data(){
    return {
      operations: []
    }
  },
  watch: {
    operations: function (){

    }
  },
  methods: {
    delete_mark: function (IdKey){
      let deleteKey;
      this.operations.forEach(function (operation, key){
        if(operation.id === IdKey){
          deleteKey = key;
        }
      });
      (this.operations).splice(deleteKey, 1);

    },
    createAlert: function (text, status){
      let generateCode = require('../../functions/generatePassword');
      let code = new Date().getTime()+''+ generateCode(5);

      this.operations.push({id: code, text: text, status: status})
      setTimeout(() => this.delete_mark(code), 1000);
    },
    createAlertSuccess: function (){
      this.createAlert('Сохранено!', 'ok')
    },
    createAlertError: function (){
      this.createAlert('Ошибка!', 'error')
    },
  },
  created: function() {
    //
    this.$root.$on('createAlertGood', this.createAlertSuccess);
    this.$root.$on('createAlertError', this.createAlertError);
  }
}
</script>

<style scoped lang="scss">
.growl {
  position: fixed;
  z-index: 99999;
  right: 30px;
  top: 30px;
  width: 300px;
  display: block;
}
.growl__item{
  position: relative;
  background: #fff;
  box-shadow: 5px 7px 27px 10px rgb(0 0 0 / 25%);
  margin: 10px 0;
  padding: 25px;
  display: flex;
  transition: margin 200ms ease,max-height 200ms,padding 250ms,transform 350ms 200ms cubic-bezier(.175,.885,.32,1.15),opacity 200ms cubic-bezier(.2,0,.2,1);

  &.growl__item--success{
    border-left: 2px solid #05a545;
  }

  &.growl__item--error{
    border-left: 2px solid #F5222D;
  }
}


.growl__text {
  color: #000000;
  font-weight: 600;
  font-size: 17px;
  display: inline-block;
  vertical-align: middle;
  flex: auto;
  opacity: 1;
  margin-left: 20px;
  line-height: 35px;
  transition: opacity 250ms 300ms;
}

.growl__ico__success {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='36' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='success' fill='%2307A23B'%3E%3Cpath d='M11.353 14.54a1.472 1.472 0 00-2.084-.01 1.472 1.472 0 00-.008 2.084l6.978 7.027a1.46 1.46 0 001.038.434h.008c.392 0 .76-.156 1.038-.425L39.567 2.52A1.472 1.472 0 1037.492.428l-7.51 7.46a16.883 16.883 0 00-13.106-6.234A16.798 16.798 0 004.53 7.03a16.795 16.795 0 00-3.521 5.752 16.814 16.814 0 00-.965 6.978c.58 8.31 7.289 15.027 15.599 15.623.408.033.825.04 1.233.04 3.865 0 7.6-1.306 10.606-3.741a16.848 16.848 0 006.284-13.147c0-.81-.662-1.471-1.471-1.471-.81 0-1.47.662-1.47 1.47 0 .72-.058 1.439-.164 2.15-1.095 7.108-7.6 12.272-14.806 11.757C9 31.951 3.46 26.411 2.978 19.548 2.7 15.626 4.015 11.892 6.679 9.032a14 14 0 0110.197-4.437c4.315 0 8.367 2.002 11.007 5.385l-10.59 10.54-5.94-5.98z' id='Path'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 35px;
  height: 35px;
  width: 35px;
  flex: initial;
  display: block;
}

.growl__ico__error{
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='error' fill='%23E92A40'%3E%3Cpath d='M20 0C8.94 0 0 8.94 0 20s8.94 20 20 20 20-8.94 20-20S31.06 0 20 0zm0 36.679c-9.194 0-16.679-7.485-16.679-16.679 0-9.194 7.485-16.679 16.679-16.679 9.194 0 16.679 7.485 16.679 16.679 0 9.194-7.485 16.679-16.679 16.679zm9.023-25.701c-.68-.68-1.702-.68-2.38 0L20 17.62l-6.634-6.634c-.679-.68-1.701-.68-2.38 0-.68.679-.68 1.701 0 2.38L17.62 20l-6.634 6.634c-.68.679-.704 1.726 0 2.38.531.491 1.538.851 2.38 0L20 22.38l6.634 6.634c1.014.957 2.045.344 2.38 0 .68-.679.68-1.701 0-2.38L22.38 20l6.634-6.634c.687-.687.687-1.71.009-2.388z' id='Shape'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: 35px;
  height: 35px;
  width: 35px;
  flex: initial;
  display: block;
}
</style>