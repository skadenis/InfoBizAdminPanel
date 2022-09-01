<template>
  <div>
    <a-form-model-item label="Название">
      <a-input />
    </a-form-model-item>
    <a-form-model-item label="Курс">
      <a-input />
    </a-form-model-item>
    <a-form-model-item label="Урок">
      <a-input />
    </a-form-model-item>
    <a-form-model-item label="Студент">
      <a-input />
    </a-form-model-item>

    <a-form-model-item label="Дополнительные материалы">
      <div class="table__head">
        <div>
          <p>Файл</p>
        </div>
        <div>
          <p>1</p>
        </div>
        <div>
          <p>2</p>
        </div>
      </div>

      <input
        type="file"
        id="homework"
        ref="homework"
        multiple
        v-on:change="handleFilesUpload()"
      />
      <p class="file-info">Формат PDF</p>
    </a-form-model-item>

    <a-row type="flex" :gutter="24" class="bottom-buttons">
      <a-col :span="24" :lg="12" :md="24">
        <a-button class="button" type="primary" @click="">Принять</a-button>
      </a-col>
      <a-col :span="24" :lg="12" :md="24">
        <a-button class="button" type="danger" @click="">Отклонить</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HomeworkAPI from "../../../../api/HomeworkAPI";

export default {
  props: ["homeworkId"],
  data() {
    return {};
  },

  mounted() {
    this.getHomework();
  },

  methods: {
    getHomework: function() {
      HomeworkAPI.get_all()
        .then((response) => {
          this.homework = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.student-info {
  margin-top: 20px;
  span {
    color: black;
    font-weight: 600;
    font-size: 1.2em;
  }

  .name {
    margin-right: 10px;
  }
}

.course-inc {
  font-weight: 700;
  color: black;
  margin-bottom: 15px;
}

.bottom-buttons {
  width: 100%;
  margin-bottom: 20px;

  .button {
    width: 100%;
    color: #fff;
  }
}

.file-info {
  font-size: 0.8em;
}

.table__head {
  display: flex;
  background-color: rgb(221, 221, 221);
  height: 34px;

  div {
    border-right: 1px solid #fff;

    &:first-child {
      width: 20%;
    }

    &:nth-child(2) {
      width: 40%;
    }

    &:last-child {
      width: 40%;
      border-right: none;
    }
  }

  p {
    padding: 10px;
    line-height: 14px;
    font-weight: 600;
    color: #000;
    text-align: center;
  }
}
</style>
