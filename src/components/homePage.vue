<template>
  <div class="grid align__item">
    <div class="register">
      <div id="HomePage">
        <h2>HomePage</h2>
        <form action method="post" class="form">
          <p>Login Success</p>
          <div class="form__field">
            <input type="button" v-on:click="logout()" value="Login out">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  isLoging: false,
  data() {
    return {};
  },
  // mounted() {
  //   this.$cookie.set("path", "/homePage", { expires: "5m" });
  //   console.log(this.$cookie.get("path"));
  // }
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.$router.replace({ name: "login" });
      this.$cookie.set("rememberMe", "false");
    }
  }
};
</script>

<style scoped>
#secure {
  background-color: #FFFFFF;
  border: 1px solid #CCCCCC;
  padding: 20px;
  margin-top: 10px;
}
</style>