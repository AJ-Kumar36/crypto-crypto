<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
const pages = [
  '/caesar',
  '/vigenere',
  '/binary',
  '/xor',
  '/dh',
];

export default {
  name: 'App',
  watch: {
    '$store.state.progress'(newProgress, oldProgress) {
      // const newPage = +newProgress.split('/')[0];
      // const oldPage = +oldProgress.split('/')[0];
      // if (newPage === -1) return;
      // if (newPage !== oldPage) {
      //   this.$router.push(pages[newPage]);
      // }
    }
  },
  mounted() {
    // const progress = this.$store.state.progress;
    // const page = +progress.split('/')[0];
    // if (page === -1) return;
    // if (this.$route.path === pages[page]) return;
    // this.$router.replace(pages[page]);
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  font-size: 20px;
}
</style>
