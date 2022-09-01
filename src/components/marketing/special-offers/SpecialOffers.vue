<template>
  <div>
    <div>Специальные предложения</div>
    <div>

      <div>
        <div v-for="(offer, index) in offers" class="special_offer__block" @click="open_special_offer(offer.id)">
          <img :src="config.basicImageURL+offer.image" alt="">
          <h3>{{offer.header}}</h3>
        </div>
      </div>

      <button class="add__courses-btn" @click="add_offer()">
        Добавить спец-предложение
      </button>
    </div>
  </div>


</template>

<script>
import SpecialOffersAPI from "../../../../api/SpecialOffersAPI";
import config from '@/config';

export default {
  components: {
  },
  data() {
    return {
      offers: [],
      config
    };
  },
  created: function() {
    this.getAll();
  },

  methods: {
    getAll: function() {
      SpecialOffersAPI.get_all()
          .then((response) => {
            this.offers = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
    add_offer: function() {
      this.goTo("/marketing/offers/add");
    },
    open_special_offer: function (id){
      this.goTo("/marketing/offers/"+id);
    }
  },
};
</script>

<style scoped lang="scss">
.add__courses-btn {
  width: 20%;
  min-width: 105px;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8em;
}
.special_offer__block{
  width: 100%;
  background-color: #aed1f6;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
  cursor: pointer;
}
</style>

