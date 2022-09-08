<template>
  <div>
    <div v-if="status.status === 200" class="result_good">
      {{status.text}}
    </div>

    <div v-if="status.status === 400" class="result_error">
      {{status.text}}
    </div>

    <a-form-model-item label="Заголовок">
      <a-input v-model="push.header" />
    </a-form-model-item>

    <a-form-model-item label="Текст">
      <a-textarea v-model="push.text" />
    </a-form-model-item>

    <a-form-model-item>
      <a-row type="flex" :gutter="24" class="buttons__block">
        <a-col :span="24" :lg="12" :md="24">
          <a-button class="button" type="primary" @click="sendPush"
          >Отправить push</a-button
          >
        </a-col>
      </a-row>
    </a-form-model-item>
  </div>
</template>

<script>
import PushNotificationsAPI from '../../../../api/PushNotificationsAPI'
export default {
  data(){
    return {
      push: {
        header: "",
        text: ""
      },
      status: {
        status: null,
        text: null
      }
    }
  },
  methods: {
    sendPush: function (){
      PushNotificationsAPI.sendPush({
        "title": this.push.header,
        "message": this.push.text,
      })
          .then((response) => {
            this.push = {
              header: "",
              text: ""
            };
            this.status.status = 200;
            this.status.text = "Пуш уведомление успешно отправлено";
          })
          .catch((e) => {
            this.status.status = 400;
            this.status.text = 'Ошибка: '+ e;
            console.log(e);
          });
    }
  }
}
</script>

<style scoped lang="scss">
.result_error{
  background: #ea8087;
  color: #000000;
  font-weight: bold;
  padding: 10px 15px;

}

.result_good{
  background: #97ea80;
  color: #000000;
  font-weight: bold;
  padding: 10px 15px;
}
</style>
