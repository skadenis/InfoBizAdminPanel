<template>
  <div>
    <div>
      <div>
        <div
          v-for="(offer, index) in offers"
          class="special_offer__block"
          @click="open_special_offer(offer.id)"
        >
          <img :src="config.basicImageURL + offer.image" alt="" />
          <p class="offer-header">{{ offer.header }}</p>
        </div>
      </div>
      <button class="add__offer-btn" @click="add_offer()">
        Добавить спец-предложение
      </button>
    </div>
  </div>
</template>

<script>
import SpecialOffersAPI from "../../../../api/SpecialOffersAPI";
import config from "@/config";

export default {
  components: {},
  data() {
    return {
      offers: [],
      config,
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
    open_special_offer: function(id) {
      this.goTo("/marketing/offers/" + id);
    },
  },
};
</script>

<style scoped lang="scss">
.add__offer-btn {
  width: 20%;
  min-width: 125px;
  margin: 20px 0;
  background-color: #1890ff;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8em;
}
.special_offer__block {
  width: 100%;
  height: auto;
  min-height: 100px;
  background-color: #fafafa;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgb(223, 239, 255);
  }

  .offer-header {
    margin: 10px 0;
    color: #000;
    font-size: 1.2em;
    font-weight: 600;
  }
}
</style>
