<template>
  <div>
    <Introduction v-show="$store.getters.canAccess(0, 0)" />
    <TryToShift v-show="$store.getters.canAccess(0, 1)" />
    <Conclusion v-show="$store.getters.canAccess(0, 4)" />
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
