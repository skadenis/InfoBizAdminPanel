<template>
  <div>
    <a-form-model-item label="Статус">
      <div v-if="homework.status === 'In_progress'">На проверке</div>
      <div v-if="homework.status === 'Complete'">Принято</div>
      <div v-if="homework.status === 'Failed'">Отклонено</div>
    </a-form-model-item>
    <a-form-model-item label="Студент">
      <div style="cursor: pointer">
        <div @click="goTo('/students/' + homework.user.id)">
          {{ homework.user.lastname }} {{ homework.user.firstname }}
        </div>
      </div>
    </a-form-model-item>
    <a-row type="flex" :gutter="24" class="bottom-buttons">
      <a-col :span="24" :lg="8" :md="24">
        <a-form-model-item label="Курс">
          <div
            style="cursor: pointer"
            @click="goTo('/courses/' + homework.study.course_id)"
          >
            {{ homework.study.course_name }}
          </div>
        </a-form-model-item>
      </a-col>
      <a-col :span="24" :lg="8" :md="24">
        <a-form-model-item label="Модуль">
          <div
            style="cursor: pointer"
            @click="
              goTo(
                '/courses/' +
                  homework.study.course_id +
                  '/modules/' +
                  homework.study.module_id
              )
            "
          >
            {{ homework.study.module_name }}
          </div>
        </a-form-model-item>
      </a-col>
      <a-col :span="24" :lg="8" :md="24">
        <a-form-model-item label="Урок">
          <div
            style="cursor: pointer"
            @click="
              goTo(
                '/courses/' +
                  homework.study.course_id +
                  '/modules/' +
                  homework.study.module_id +
                  '/lessons/' +
                  homework.study.lesson_id
              )
            "
          >
            {{ homework.study.lesson_name }}
          </div>
        </a-form-model-item>
      </a-col>
    </a-row>

    <a-form-model-item label="Ответ студента">
      {{ homework.text }}
    </a-form-model-item>

    <a-form-model-item label="Файлы прикрепленные к Д/З">
      <ul>
        <li v-for="(file, index) in homework.homeworkfiles_set" :key="index">
          <a
            v-if="homework.homeworkfiles_set.length > 0"
            :href="config.basicImageURL + file.file"
            >Файл {{ index + 1 }}</a
          >
        </li>
      </ul>

      <p v-if="homework.homeworkfiles_set.length === 0">
        К домашнему заданию файлов не прикреплено
      </p>
    </a-form-model-item>

    <a-form-model-item label="Коментарий к домашнему заданию">
      <a-textarea v-if="homework.status === 'In_progress'" rows="4" v-model="homework.review" />
      <p v-for="(review, key) in homework.review" v-if="homework.status !== 'In_progress'">{{review.review}}</p>
    </a-form-model-item>

    <a-row
      type="flex"
      :gutter="24"
      class="buttons__block"
      v-if="homework.status === 'In_progress'"
    >
      <a-col :span="24" :lg="12" :md="24">
        <a-button
          class="button"
          type="primary"
          @click="changeStatusHomeWork('Complete')"
          >Принять</a-button
        >
      </a-col>
      <a-col :span="24" :lg="12" :md="24">
        <a-button
          class="button"
          type="danger"
          @click="changeStatusHomeWork('Failed')"
          >Отклонить</a-button
        >
      </a-col>
    </a-row>
  </div>
</template>

<script>
import HomeworkAPI from "../../../../api/HomeworkAPI";
import config from "@/config";

export default {
  props: ["homeworkId"],
  data() {
    return {
      homework: null,
      config: config,
    };
  },

  created() {
    this.getHomework();
  },

  methods: {
    getHomework: function() {
      HomeworkAPI.get(this.$route.params.homeworkId)
        .then((response) => {
          this.homework = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    changeStatusHomeWork(status) {
      HomeworkAPI.check_homework({
        homework: Number(this.$route.params.homeworkId),
        review: this.homework.review,
        homework_status: status,
      })
        .then((response) => {
          this.getHomework();
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>

<style scoped lang="scss">
.buttons__block {
  margin-top: 20px;
}
</style>
