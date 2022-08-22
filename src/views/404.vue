<template>
	<a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
		<template #extra>
			<router-link class="ant-btn ant-btn-primary" to="/login">Back Home</router-link>
		</template>
	</a-result>
</template>


<script>
export default ({
  watch:{
    getUserAuthStatus: {
      handler(val) {
        if(val === false){
          this.$router.push({ name: 'Логин'});
        }
      },
      immediate: true,
    }
  },
  created() {
    this.AuthInfo = (this.$store.getters["User/getUserInfo"]);
    if (this.AuthInfo.type !== 0){
      this.exit();
    }
  },
  computed: {
    ...mapGetters({
      getUserAuthStatus: 'User/getUserAuthStatus',
      getUserInfo: 'User/getUserInfo'
    }),
  },
})

</script>