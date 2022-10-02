<template>
  <div>
    <a-form-model-item label="Студент">
      <div style="cursor: pointer">
        <div @click="goTo('/students/' + user_info.id)">
          {{ user_info.firstname }} {{ user_info.lastname }}
        </div>
      </div>
    </a-form-model-item>
    <a-row type="flex" :gutter="24" class="bottom-buttons">
      <a-col :span="24" :lg="6" :md="6">
        <a-form-model-item label="Курс">
          <div style="cursor: pointer">
            <div @click="goTo('/courses/' + course.pk )">
              {{ course.name }}
            </div>
          </div>
        </a-form-model-item>
      </a-col>
      <a-col :span="24" :lg="6" :md="6">
        <a-form-model-item label="Модуль">
          <div style="cursor: pointer">
            <div @click="goTo('/courses/' + course.pk + '/modules/' + module.pk)">
              {{ module.name }}
            </div>
          </div>
        </a-form-model-item>
      </a-col>
      <a-col :span="24" :lg="6" :md="6">
        <a-form-model-item label="Урок">
          <div style="cursor: pointer">
            <div @click="goTo('/courses/' + course.pk + '/modules/' + module.pk + '/lessons/' + lesson.pk)">
              {{ lesson.name }}
            </div>
          </div>
        </a-form-model-item>
      </a-col>
    </a-row>

    <div>
      <div v-for="(question, questionIndex) in answers" class="question_wrapper">
        <p><b>{{question.question.name}}</b></p>
        <div class="answers_wrapper">
          <div v-for="(option, optionIndex) in question.question.option_set" class="answer" :class="{is_correct: option.is_correct, is_user_answer: option.is_user_answer  }">{{optionIndex+1}}. {{ option.text }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TestsAPI from "../../../api/TestsAPI";

export default {
  name: "EditTest",
  props: ['testID'],
  mounted() {
    this.get();
  },
  data(){
    return {
      user_info: null,
      course: null,
      module: null,
      lesson: null,
      answers: null
    }
  },
  methods: {
    addClassOption(option){
      if(option.is_correct){
        if(option.is_user_answer){
          return {"correct_user_answ": true}
        }
      }
    },
    get(){
      TestsAPI.getById(this.testID)
          .then((response) => {
            this.user_info = response.data.user;
            this.course = response.data.course;
            this.module = response.data.module;
            this.lesson = response.data.lesson;
            this.answers = response.data.answers;
          })
          .catch((e) => {
            console.log(e);
          });
    }
  }
}
</script>

<style scoped lang="scss">
.question_wrapper{
  margin: 15px 0;
  background: #eeeeee;
  padding: 10px;
  &>p>b{
    font-weight: bold;

  }
}
.answer{
  padding: 10px;
  margin: 8px;
  &.is_user_answer{
    background: red;
  }
  &.is_correct{
    background: yellow;
  }
  &.is_correct.is_user_answer{
    background: greenyellow;
  }
}


</style>