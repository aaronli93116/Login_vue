<template>
  <div id="login">
    <h1>Login</h1>
    <input type="text" name="username" v-model="input.username" placeholder="Username">
    <br>
    <input type="password" name="password" v-model="input.password" placeholder="Password">
    <br>
    <input type="checkbox" id="rememberMe" value="RememberMe" v-on:click="register()">
    <label for="rememberMe">Remember Me</label>
    <br>
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      },
      remberMe: false
    };
  },
  mounted() {},
  methods: {
    register() {
      if (this.input.username !== "" && this.input.password !== "") {
        localStorage.setItem(this.input.username, this.input.password);
      }
    },
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        if (localStorage.getItem(this.input.username) === this.input.password) {
          this.$emit("authenticated", true);
          this.$router.replace({ name: "homePage" });
        } else {
          alert("The username and / or password is incorrect");
        }
      } else {
        alert("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  border: 1px solid #CCCCCC;
  background-color: #FFFFFF;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>