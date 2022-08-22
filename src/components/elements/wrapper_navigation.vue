<template>
  <div class="wrapper">
    <h6>{{ ElementHeader }}</h6>
    <p v-if="Description.length > 0">{{ Description }}</p>
  </div>
</template>

<script>
export default {
  name: "wrapper-header_with_descr",
  props:['ElementHeader', 'Description']
}
</script>

<style scoped lang="scss">
.wrapper{
  background-color: #fafafa;
  border: 1px dashed #d9d9d9;
  padding: 15px 10px;
  margin: 10px 0 ;
  cursor: pointer;

  &:hover{
    background-color: rgba(24, 144, 255, 0.15);
    border: 1px dashed #1890FF;

    & h6{
      text-decoration: underline;
    }
  }
  & p{
    margin-top: 10px;
  }
}
</style>