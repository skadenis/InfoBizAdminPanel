<template>
  <div @click="goTo('/groups/'+data.chat_id)">
    <div class="timing" @click="">
      <div>
        {{index+1}}
      </div>
      <div>
        {{ data.group_name }}
      </div>
      <div>
        {{ data.chat_name }}
      </div>
      <div>
        {{ data.users_count }}
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config";

export default {
  props: ["data","index"],
  methods: {
  },
  data(){
    return{
      config
    }
  },
};
</script>

<style scoped lang="scss">
.timing {
  display: flex;
  cursor: pointer;
  box-sizing: border-box;

  border: 1px solid rgb(221, 221, 221);
  margin: -1px 0;

  div {
    width: 33.3333%;
    border-right: 1px solid rgb(221, 221, 221);
  }

  &-input {
    border: none;
    height: 100%;
  }
}

.button {
  color: #fff;
}
</style>
