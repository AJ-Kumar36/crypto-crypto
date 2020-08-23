<template>
  <div>
    <Introduction />
    <TryToShift />
    <TryToGuess />
    <Conclusion />
  </div>
</template>

<script>
import Introduction from '../components/Caesar/Introduction.vue';
import TryToShift from '../components/Caesar/TryToShift.vue';
import TryToGuess from '../components/Caesar/TryToGuess.vue';
import Conclusion from '../components/Caesar/Conclusion.vue';

export default {
  name: 'Caesar',
  components: {
    Introduction,
    TryToShift,
    TryToGuess,
    Conclusion,
  }
}
</script>

<style scoped>
</style>
