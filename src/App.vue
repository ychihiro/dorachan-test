<template>
  <div id="app">
    <div v-for="user in users" :key="user">
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.password }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:8000/api/v1/user")
      .then((response) => (this.users = response.data));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
