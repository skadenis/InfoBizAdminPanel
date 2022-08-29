<template>
  <div>
    <div class="table__head">
      <div>
        <p>Курс</p>
      </div>
      <div>
        <p>Урок</p>
      </div>
      <div>
        <p>Студент</p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped lang="scss">
.table__head {
  display: flex;
  background-color: rgb(221, 221, 221);

  div {
    width: 20%;
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
</style>
