export default {
    data(){
        return{
            user_info: null
        }
    },
    created() {
        this.user_info = (this.$store.getters["User/getUserInfo"]);
    }
}
