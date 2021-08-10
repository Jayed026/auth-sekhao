<template>
  <div>
    <button @click="logout">logout</button>
    <h1>HELLO {{ username }}</h1>
    <h2>your email is: {{ email }}</h2>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      username: "",
      email: "",
    };
  },
  created() {
    //user is not authorized
    if (localStorage.getItem("token") === null) {
      this.$router.push("/");
    }
  },
  mounted() {
    axios
      .get("http://api-shekhao.herokuapp.com/profile", {
        headers: { token: localStorage.getItem("token") },
      })
      .then((res) => {
        this.username = res.data.user.username;
        this.email = res.data.user.email;
      });
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>
