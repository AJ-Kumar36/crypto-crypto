<template>
  <div>
    <Introduction />
    <TryToShift />
    <Conclusion />
  </div>
</template>

<script>
import Introduction from '../components/Caesar/Introduction.vue';
import TryToShift from '../components/Caesar/TryToShift.vue';
import Conclusion from '../components/Caesar/Conclusion.vue';

export default {
  name: 'Caesar',
  components: {
    Introduction,
    TryToShift,
    Conclusion,
  }
}
</script>

<style scoped>
</style>
