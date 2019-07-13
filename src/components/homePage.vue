<template>
  <div id="HomePage">
    <h1>HomePage</h1>
    <p>Login Success</p>
    <button type="button" v-on:click="logout()">Logout</button>
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