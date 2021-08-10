<template>
  <div class="navbar">
    <a href="#" class="navbar-brand">facebook icon</a>
    <a href="#" class="navbar-brand">gmail icon</a>

    <router-link to="/login" class="nav-link">Login </router-link>

    <router-link to="/reg" class="nav-link">Registration </router-link>
  </div>
</template>

<script>
export default {
  name: "Head",
};
</script>

<style scoped>
.navbar {
  width: 1780px;
}
</style>
