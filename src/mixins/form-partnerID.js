export default {
    created() {
        let AuthInfo = (this.$store.getters["User/getUserInfo"]);
        this.editor = AuthInfo.type;

        switch(this.editor){
            case 0:
                this.form.partner_id = this.$route.params.id;
                break;
            case 1:
                this.form.partner_id = AuthInfo.partner_id;
                break;
        }
    }
}
