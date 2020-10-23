<template>
  <div>
    <Introduction />
    <DecimalToBinary :decimal="6" />
    <DecimalToBinary :decimal="13" :guess="true" />
    <Conclusion />
  </div>
</template>

<script>
import Introduction from '../components/Binary/Introduction.vue';
import DecimalToBinary from '../components/Binary/DecimalToBinary.vue';
import Conclusion from '../components/Binary/Conclusion.vue';

export default {
  name: 'Binary',
  components: {
    Introduction,
    DecimalToBinary,
    Conclusion,
  },
}
</script>

<style scoped>
</style>
