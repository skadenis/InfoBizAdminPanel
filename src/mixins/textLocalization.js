import Config from "@/config";

export default {
    data() {
        return {
            language: '',
            TextLocalization: Config.TextLocalization
        }
    },
    mounted() {
        this.language = (this.$store.getters["User/getUserLanguage"]);
    }
}