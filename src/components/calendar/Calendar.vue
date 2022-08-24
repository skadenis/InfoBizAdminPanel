<template>
  <div>
    <div class="table__head">
      <div>
        <p>Название</p>
      </div>
      <div>
        <p>Дата</p>
      </div>
      <div>
        <p>Время</p>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
    <div class="table__inputs">
      <input type="text" placeholder="Введите название" />
      <input type="date" placeholder="Введите дату" />
      <input type="time" placeholder="Введите время" />
      <input type="text" />
      <input type="text" />
    </div>
    <button class="add__students-btn">Добавить событие</button>
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
    font-size: 1.2em;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
}

.add__students-btn {
  width: 20%;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
}

.table__inputs {
  border: 1px solid rgb(221, 221, 221);

  input {
    height: 34px;
    width: 20%;
    border-right: 1px solid rgb(221, 221, 221);
    padding-left: 10px;
    &:last-child {
      border-right: none;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
