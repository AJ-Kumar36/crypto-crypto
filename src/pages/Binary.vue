<template>
  <div>
    <Introduction />
    <Conclusion />
  </div>
</template>

<script>
import Introduction from '../components/Binary/Introduction.vue';
import Conclusion from '../components/Binary/Conclusion.vue';

export default {
  name: 'Binary',
  components: {
    Introduction,
    Conclusion,
  },
}
</script>

<style scoped>
</style>
