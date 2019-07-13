<template>
  <div id="HomePage">
    <h1>HomePage</h1>
    <p>Login Success</p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  isLoging: false,
  data() {
    return {};
  },
  mounted() {
    this.$cookie.set("path", "/homePage", { expires: "5m" });
    console.log(this.$cookie.get("path"));
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