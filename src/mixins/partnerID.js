export default {
  data() {
    return {
      partner_id: null,
    };
  },
  created() {
    let AuthInfo = this.$store.getters["User/getUserInfo"];
    this.editor = AuthInfo.type;

    switch (this.editor) {
      case 0:
        this.partner_id = this.$route.params.id;
        break;
      case 1:
        this.partner_id = AuthInfo.partner_id;
        break;
    }
  },
};
