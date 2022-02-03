<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from "@/views/home/Home.vue";

export default {
  name: "app",
  components: {
    Home,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  position: relative;
  color: #2c3e50;
}
</style>
