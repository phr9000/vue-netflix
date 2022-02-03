<template>
  <div class="home">
    <Header></Header>
  </div>
</template>

<script>
import Header from "@/views/home/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.home {
  position: relative;
  color: #000;
}
</style>
