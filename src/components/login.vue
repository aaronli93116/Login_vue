<template>
  <div class="grid align__item">
    <div class="register">
      <h2>Login in</h2>
      <form action method="post" class="form">
        <div class="form__field">
          <input type="text" name="username" v-model="input.username" placeholder="Username">
        </div>
        <br>
        <input type="password" name="password" v-model="input.password" placeholder="Password">
        <br>
        <input type="checkbox" id="rememberMe" value="RememberMe" v-on:click="register()">
        <label for="rememberMe">Remember Me</label>
        <br>
        <div class="form__field">
          <input type="button" v-on:click="login()" value="Login in">
        </div>
      </form>
    </div>
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
      }
    };
  },
  created() {
    console.log(this.$cookie.get("rememberMe"));
    if (this.$cookie.get("rememberMe") === "true") {
      this.$router.replace({ name: "homePage" });
    } else {
      this.$router.replace({ name: "login" });
    }
  },
  // mounted() {
  //   console.log(this.$cookie.get("rememberMe"));
  //   if (this.$cookie.get("rememberMe") === "true") {
  //     this.$router.replace({ name: "homePage" });
  //   }
  // },
  methods: {
    register() {
      if (this.input.username !== "" && this.input.password !== "") {
        localStorage.setItem(this.input.username, this.input.password);
      }
    },
    login() {
      if (this.input.username !== "" && this.input.password !== "") {
        if (localStorage.getItem(this.input.username) === this.input.password) {
          this.$cookie.set("rememberMe", "true", { expires: "5m" });
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